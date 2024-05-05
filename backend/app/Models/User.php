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

class User extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable, HasRoles, Achiever, Billable;

    protected $appends = ['avatar_full', 'is_premium'];

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
        'avatar'
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

    public function friends()
    {
        return $this->belongsToMany(User::class, 'friends', 'user1_id', 'user2_id');
    }

    public function friendRequests()
    {
        return $this->belongsToMany(User::class, 'friend_requests', 'requested_id', 'requester_id');
    }

    public function commentsOnProfile()
    {
        return $this->belongsToMany(User::class, 'profile_comments', 'profile_id');
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }

    public function purchasedCharacterParts()
    {
        return $this->hasMany(PurchasedCharacterPart::class);
    }

    public function purchasedBackgrounds()
    {
        return $this->hasMany(PurchasedBackground::class);
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

    public function isFriend(): Attribute
    {
        return new Attribute(
            get: fn () => $this->friends()->where('user1_id', Auth::id())->orWhere('user2_id', Auth::id())->exists(),
        );
    }

    public function avatarFull(): Attribute
    {
        return new Attribute(
            get: fn () => $this->avatar ? config('app.url') . "/storage" . $this->avatar : null,
        );
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
