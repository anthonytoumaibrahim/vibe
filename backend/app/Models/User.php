<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Assada\Achievements\Achiever;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Casts\Attribute;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Auth;
use Laravel\Cashier\Billable;
use Spatie\Permission\Traits\HasRoles;
use Staudenmeir\LaravelMergedRelations\Eloquent\HasMergedRelationships;

class User extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable, HasRoles, Achiever, Billable, HasMergedRelationships;

    protected $appends = ['avatar_full', 'is_premium', 'is_friend', 'is_owner', 'is_admin'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'username',
        '2d_data',
        'email',
        'password',
        'country'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'character_data',
        'profile_data',
        'oauth_id',
        'avatar',
        'stripe_id',
        'pm_type',
        'pm_last_four',
        'trial_ends_at',
        'bio',
        'roles',
        'email_verified_at',
        'email',
        'created_at',
        'updated_at'
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'character_data' => 'array',
            'profile_data' => 'array'
        ];
    }

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function friendsTo()
    {
        return $this->belongsToMany(User::class, 'friends', 'user_id', 'friend_id')
            ->withPivot('accepted')
            ->withTimestamps();
    }

    public function friendsFrom()
    {
        return $this->belongsToMany(User::class, 'friends', 'friend_id', 'user_id')
            ->withPivot('accepted')
            ->withTimestamps();
    }

    public function pendingFriendsTo()
    {
        return $this->friendsTo()->wherePivot('accepted', false);
    }

    public function pendingFriendsFrom()
    {
        return $this->friendsFrom()->wherePivot('accepted', false);
    }

    public function acceptedFriendsTo()
    {
        return $this->friendsTo()->wherePivot('accepted', true);
    }

    public function acceptedFriendsFrom()
    {
        return $this->friendsFrom()->wherePivot('accepted', true);
    }

    public function friendRequests()
    {
        return $this->belongsToMany(User::class, 'friends', 'friend_id', 'user_id')->wherePivot('accepted', false);
    }

    public function sentFriendRequests()
    {
        return $this->hasMany(Friend::class, 'user_id')->where('accepted', false);
    }

    public function friends()
    {
        return $this->mergedRelationWithModel(User::class, 'friends_view');
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }

    public function isPremium(): Attribute
    {
        return new Attribute(
            get: fn () => $this->hasRole('premium'),
        );
    }

    public function balance(): Attribute
    {
        return new Attribute(
            get: fn () => $this->transactions()->sum('amount'),
        );
    }

    public function avatarFull(): Attribute
    {
        return new Attribute(
            get: fn () => $this->avatar ? config('app.url') . "/storage" . $this->avatar : null,
        );
    }

    public function isFriend(): Attribute
    {
        return new Attribute(
            get: fn () => $this->friends()->where('id', Auth::id())->exists(),
        );
    }

    public function isOwner(): Attribute
    {
        return new Attribute(
            get: fn () => $this->id === Auth::id(),
        );
    }

    public function isAdmin(): Attribute
    {
        return new Attribute(
            get: fn () => $this->hasRole('admin'),
        );
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    public function purchases()
    {
        return $this->hasMany(Purchase::class);
    }
}
