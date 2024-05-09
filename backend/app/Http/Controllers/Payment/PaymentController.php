<?php

namespace App\Http\Controllers\Payment;

use Stripe\Stripe;
use Stripe\Webhook;
use App\Models\User;
use Illuminate\Http\Request;
use Stripe\Checkout\Session;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Stripe\Exception\ApiErrorException;

class PaymentController extends Controller
{
    public function premiumCheckout(Request $request)
    {
        $user = User::find(Auth::id());
        Stripe::setApiKey(config('cashier.secret'));
        try {
            $session = Session::create([
                'payment_method_types' => ['card'],
                'line_items' => [[
                    'price' => 'price_1PEXVaCtMr5VWEDCL02cp6tG',
                    'quantity' => 1,
                ]],
                'mode' => 'subscription',
                'success_url' => config('app.frontend_url') . '/premium/thank-you',
                'cancel_url' => config('app.frontend_url') . '/premium',
                'client_reference_id' => $user->id,
            ]);

            $user->stripe_checkout_session_id = $session->id;
            $user->save();

            return response()->json([
                'checkout_url' => $session->url,
            ]);
        } catch (ApiErrorException $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function webhook(Request $request)
    {
        $payload = $request->getContent();
        $sigHeader = $request->header('Stripe-Signature');
        $event = null;

        try {
            $event = Webhook::constructEvent(
                $payload,
                $sigHeader,
                config('services.stripe.webhook_secret')
            );
        } catch (\Exception $e) {
            return response()->json(['error' => 'Webhook signature verification failed'], 403);
        }

        if ($event->type === 'checkout.session.completed') {
            $session = $event->data->object;
            $user = User::find($session->client_reference_id);
            $user->attachRole('premium');
            return response()->json(['success' => true]);
        }

        return response()->json(['success' => false, 'error' => 'Event not handled']);
    }
}
