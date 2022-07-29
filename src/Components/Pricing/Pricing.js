import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0,
            benefits: [
                'Lifetime Free',
                'Unlimited Deals',
                'Localized Deals',
                'Fantastic Deals',
                'Crazy Deals'
            ]
        },
        {
            id: 2, name: 'Regular', price: 9.99,
            benefits: [
                'Everything on Free',
                'Unlimited Deals',
                'Localized Deals',
                'Fantastic Deals',
                'Crazy Deals'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99,
            benefits: [
                'Everything on Regular',
                'Unlimited Deals',
                'Localized Deals',
                'Fantastic Deals',
                'Crazy Deals'
            ]
        }
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl font-serif text-gray-600'>Best deals of the town</h1>
            <p className='mt-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eos incidunt facilis optio! Accusantium fuga quaerat in harum ab, voluptatem tempore ad architecto. Fugiat explicabo quos officia earum, veritatis cum animi dolores quae atque fuga suscipit non iste ducimus, dolor repellendus labore tenetur commodi inventore nihil delectus odit, quia assumenda neque reprehenderit? Totam eos voluptatibus sequi molestiae nulla iste ullam id aspernatur, repellat veniam doloremque, rerum velit quod laboriosam minima quae neque voluptas? Molestiae explicabo cumque libero reprehenderit laboriosam! Fugit ducimus velit dolore ea dolor, at suscipit unde voluptatibus consectetur tempore! Alias numquam asperiores odit fugit cumque dolores voluptate consequatur.</p>
            <div className='grid md:grid-cols-3 gap-6 mt-8'>
                {
                    pricingOptions.map(option => <PricingOption
                        key={option.id}
                        option={option}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;