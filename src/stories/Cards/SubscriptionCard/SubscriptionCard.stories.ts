import { Meta, StoryObj } from '@storybook/react';
import SubscriptionCard from './SubscriptionCard';

const meta: Meta<typeof SubscriptionCard> = {
    component: SubscriptionCard,
    title: 'Cards/SubscriptionCard',
};

export default meta;

export const Free: StoryObj<typeof SubscriptionCard> = {
    args: {
        active: 'free',
        subscription: 'Free Plan',
    },
};

export const Advanced: StoryObj<typeof SubscriptionCard> = {
    args: {
        active: 'advanced',
        subscription: 'Advanced',
        expiry: '07/07/2025',
    },
};

export const Premium: StoryObj<typeof SubscriptionCard> = {
    args: {
        active: 'premium',
        subscription: 'Premium',
        expiry: '07/07/2025',
    },
};

