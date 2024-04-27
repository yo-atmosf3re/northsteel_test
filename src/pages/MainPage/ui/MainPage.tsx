import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';

interface MainPagePropsI {
    className?: string;
}

/**
 *
 * @param className
 */
export const MainPage: React.FC<MainPagePropsI> = memo(({ className }) => {
    return (
        <Card
            max
            fullHeight
            className={classNames('', {}, [className])}
            variant="light"
        >
            <Text
                text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            aperiam accusantium tenetur quisquam laboriosam autem officia
            dolorum reprehenderit perspiciatis, ratione libero eligendi
            praesentium quae obcaecati numquam vitae atque debitis ex voluptatem
            nisi amet. Nisi aperiam voluptatem temporibus, nesciunt illum quia.
            Id dolorum libero ea voluptatem, rerum assumenda? Libero suscipit
            nostrum nisi velit vero laborum sint quasi fuga architecto.
            Voluptates, voluptatum unde soluta placeat quos molestiae voluptas
            earum molestias. Itaque quaerat veritatis tenetur sed voluptatum
            veniam quod soluta at, amet sint totam. Porro voluptatum possimus
            est velit esse ut tempora, consequuntur ipsam odio quibusdam,
            molestiae dolorum alias provident quia reiciendis mollitia voluptate
            repellat reprehenderit facilis? Voluptate vero inventore velit iste
            distinctio explicabo minus quidem soluta reprehenderit totam
            doloribus sapiente, est consequuntur animi labore nemo facilis
            doloremque tenetur? Sint officia maiores necessitatibus quae eveniet
            itaque magnam possimus tempora porro tempore vel facere nisi
            molestiae repudiandae odio quis harum dicta illo reiciendis,
            excepturi vitae nemo earum? Eos expedita harum quia. Optio ex
            laboriosam veniam corporis odit reiciendis ipsa officiis?
            Repudiandae similique totam, molestias tenetur neque alias nesciunt
            sunt odit recusandae. Earum laboriosam debitis nesciunt omnis rem id
            molestias provident molestiae corrupti nostrum repudiandae facilis
            quibusdam non consequuntur commodi voluptatibus, quidem et rerum
            doloremque dolores facere. Quisquam fugiat ex cumque maiores earum
            temporibus eligendi. Molestias voluptatem ipsum autem perspiciatis
            nisi reiciendis quos velit fugiat ducimus, harum omnis asperiores
            maiores perferendis nam consequatur tempore molestiae doloribus
            natus. Dolorum nesciunt nulla quasi voluptatibus ipsa quas, eos iure
            obcaecati facere, eum excepturi molestiae? Blanditiis, voluptatum,
            dicta incidunt excepturi voluptas ex laboriosam quaerat, molestias
            optio aspernatur quo iusto sed natus facere ipsam repellat
            voluptates laborum. Recusandae ex assumenda quod architecto sit sint
            molestias quibusdam, neque consectetur, eligendi rerum dolorum odio
            odit perspiciatis dolor! Sequi a cupiditate labore? Esse quas
            aliquid fuga iusto reprehenderit accusantium repellat dolore enim
            incidunt ea deserunt delectus veritatis repellendus consequatur quam
            dolor, nulla id maxime natus at sint animi! Illo consectetur optio
            debitis tempore numquam explicabo illum, adipisci, in, nam minima
            necessitatibus veritatis dolorum perferendis voluptatibus nobis
            natus. Iure, ipsum nulla excepturi modi dignissimos repellendus quis
            optio eaque, obcaecati accusantium temporibus quaerat alias sit
            perferendis totam accusamus nemo dolores minima. Quisquam
            reprehenderit natus, deserunt illum enim modi reiciendis
            exercitationem autem quaerat, ipsam iusto neque? Rem nemo ducimus
            eos illo rerum sint cumque inventore corrupti officia dolorem
            voluptate enim itaque maxime, dolorum assumenda laudantium a
            blanditiis, est et quibusdam officiis hic? Accusantium dolor ad,
            temporibus neque, minima voluptatum laudantium sunt amet sint porro
            ipsum! Quia, tenetur perspiciatis commodi illo suscipit culpa optio,
            voluptatem, architecto adipisci ex nihil sit iure inventore
            doloribus neque necessitatibus? Quaerat perspiciatis libero quasi
            dignissimos molestiae voluptatum dolor quidem nam error dolores
            provident cupiditate, ipsam soluta incidunt quibusdam ipsum hic,
            eveniet omnis officia aliquid quos voluptate quia recusandae
            repellat. Vitae minus voluptatum dolor cupiditate perferendis rerum
            ducimus alias eveniet, ipsum atque, accusantium ipsam omnis libero
            repellendus iure ad. Sequi veritatis deserunt cumque, voluptatum
            error culpa corporis cupiditate, necessitatibus eius ipsam mollitia
            fuga, aut eum quidem sapiente! Laudantium, error ipsum. Laudantium,
            beatae vero!"
            />
        </Card>
    );
});
