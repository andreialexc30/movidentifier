<template>
    <aside class="cart-details">
        <h1 class="cart-details_title">Summary</h1>
        <h2 class="cart-details_sub-title">
            <div class="sub-title_items">
                <span class="no-items">0</span>
                items
            </div>
            <div class="sub-title_items__price">
                $100
            </div>
        </h2>
        <div class="cart-checkout">
            <form class="checkout_form">
                <div class="form-details form-fullname">
                    <label for="fullname">Full Name</label>
                    <input id="fullname" type="text" required name="fullname" placeholder="Your Full Name" class="form-input">
                </div>
                <div class="form-details form-email">
                    <label for="email">Email</label>
                    <input id="email" type="email" required name="email" placeholder="johndoe@mail.com" class="form-input">
                </div>
                <div class="form-details form-address">
                    <label for="city">City</label>
                    <input id="city" type="text" name="city" placeholder="City Name" class="form-input form-address_input">
                    <label for="address">Address</label>
                    <input id="address" type="text" required name="address" placeholder="123 Your Address" class="form-input form-address_input">
                    <label for="zip">Zip Code</label>
                    <input id="zip" type="text" required name="zipcode" placeholder="Zip Code" class="form-input form-address_input">
                </div>
                <input type="submit" value="continue to checkout" class="form-submit_btn">
            </form>
        </div>
    </aside>
</template>