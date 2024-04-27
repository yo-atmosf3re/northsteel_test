import React, { memo } from 'react';
import { Button } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';
import { HStack } from '@/shared/ui/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useUserActions } from '@/entities/User';

interface ProfileInformationPropsI {
    className?: string;
}

/**
 * Компонента, которая отрисовывает рандомный текст и кнопку логаута;
 * @param className
 */
export const ProfileInformation: React.FC<ProfileInformationPropsI> = memo(
    ({ className }) => {
        const { logout } = useUserActions();
        const onClickLogoutHandler = () => {
            logout();
        };

        return (
            <div className={classNames('', {}, [className])}>
                <Text
                    title="Добро пожаловать!"
                    align="center"
                />
                <Text
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                quam debitis quas nihil suscipit necessitatibus sunt corrupti
                eaque aliquid unde atque eum exercitationem, repellendus
                quisquam. Excepturi iure quae, nulla minus beatae delectus optio
                dolorem sint sed dolor! Exercitationem minima obcaecati aperiam
                in delectus iusto officia sequi voluptate totam dolor?
                Praesentium quos sed consequuntur. Doloremque, suscipit magnam
                nulla recusandae consectetur obcaecati asperiores id minus. Eius
                sunt, sint corporis quis asperiores in nostrum, esse autem magni
                voluptas ea quaerat deserunt itaque quasi et doloremque nemo
                quos architecto adipisci doloribus tenetur, perspiciatis
                blanditiis dicta? Tempora aperiam, voluptatibus sequi sed minus
                magnam laudantium distinctio!"
                />
                <HStack justify="center">
                    <Button
                        onClick={onClickLogoutHandler}
                        variant="outline"
                    >
                        Выйти из аккаунта
                    </Button>
                </HStack>
            </div>
        );
    },
);
