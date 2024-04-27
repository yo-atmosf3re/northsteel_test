import React, { memo } from 'react';
import { ProfileInformation } from '@/features/ProfileInformation';
import { Card } from '@/shared/ui/Card';
import cls from './ProfilePage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ProfilePagePropsI {
    className?: string;
}

/**
 * Компонента, отрисовывающая страницу профиля;
 * @param className
 */
export const ProfilePage: React.FC<ProfilePagePropsI> = memo(
    ({ className }) => {
        return (
            <Card
                max
                fullHeight
                variant="light"
                className={classNames(cls['profile-page'], {}, [className])}
            >
                <ProfileInformation />
            </Card>
        );
    },
);
