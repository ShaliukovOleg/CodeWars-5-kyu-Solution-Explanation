/*

You run a series of remote CCTV networks, watching over industrial installations in the Arctic circle. 
Because of high data costs, every command sent to these networks is packaged up in one byte. 
Networks consist of anywhere between 1 and 16 cameras. 
Every camera in every installation is initially set at 30 degrees down (-30) and pointing straight forward. 
Cameras can be remotely controlled to move up/down and left/right, up to 45 degrees in any direction. 
'Up' and 'right' are considered positive, 'down' and 'left' are considered negative.

The first four bits of the package represent a camera ID (which are sequential, indexed from 0). 
The fifth bit indicates to move the camera up by five degrees, the sixth bit down by five degrees. 
The seventh and eighth bits indicate left and right, respectively, by five degrees.

Complete the network process method to handle incoming instructions, 
and adjust cameras as required in the move method.

*/

/*

Вы управляете серией удаленных сетей видеонаблюдения, наблюдая за промышленными объектами в Заполярье. 
Из-за высокой стоимости передачи данных каждая команда, отправляемая в этой сети, упаковывается в один байт. 
Сети состоят из 1-16 камер. 
Каждая камера в каждой установке изначально установлена под углом 30 градусов вниз (-30) и направлена прямо вперед. 
Камеры могут дистанционно управляться для перемещения вверх/вниз и влево/вправо на угол до 45 градусов в любом направлении. 
При этом "вверх" и "вправо" считаются положительными, а "вниз" и "влево" - отрицательными.

Первые четыре бита пакета представляют собой идентификатор камеры (они последовательные, индексируются с 0). 
Пятый бит указывает на перемещение камеры вверх на пять градусов, шестой - вниз на пять градусов. 
Седьмой и восьмой биты указывают на перемещение влево и вправо соответственно на пять градусов.

Для обработки поступающих инструкций выполните метод сетевого процесса, 
и настроить камеры в соответствии с требованиями метода перемещения.

*/

function Network(count) {
    this.cameras = [];
    for (var i = 0; i < count; i++)
        this.cameras.push(new Camera(0, -30));
}

Network.prototype.process = function (byte) {
    // Распаковываем биты из байта
    const cameraIndex = byte & 0x0F; // Получаем индекс камеры из последних 4 бит
    const moveUp = (byte & 0x10) !== 0; // Получаем бит для движения вверх (первый бит)
    const moveDown = (byte & 0x20) !== 0; // Получаем бит для движения вниз (второй бит)
    const moveLeft = (byte & 0x40) !== 0; // Получаем бит для движения влево (третий бит)
    const moveRight = (byte & 0x80) !== 0; // Получаем бит для движения вправо (четвёртый бит)

    // Находим камеру по индексу
    const camera = this.cameras[cameraIndex];

    // Вызываем метод move для камеры, передавая соответствующие значения
    camera.move(
        (moveRight ? 5 : 0) - (moveLeft ? 5 : 0), // Горизонтальное движение
        (moveUp ? 5 : 0) - (moveDown ? 5 : 0) // Вертикальное движение
    );
};

function Camera(h, v) {
    this.horizontal = h;
    this.vertical = v;
}

Camera.prototype.move = function (h, v) {
    // Проверка, что горизонтальное движение в пределах [-45, 45] градусов
    this.horizontal = Math.max(Math.min(this.horizontal + h, 45), -45);

    // Проверка, что вертикальное движение в пределах [-45, 45] градусов
    this.vertical = Math.max(Math.min(this.vertical + v, 45), -45);
};

const network = new Network(4);
// Примеры инструкций для перемещения камер:
network.process(0x09);
network.process(0x26);
network.process(0x80);
network.process(0x32);
// Выводим текущие углы каждой камеры после инструкций
for (let i = 0; i < 4; i++) {
    const camera = network.cameras[i];
    console.log(`Camera ${i} - Горизонтальный угол: ${camera.horizontal} градусов, Вертикальный угол: ${camera.vertical} градусов`);
}

// // Добавляем камеры в массив this.cameras
// network.cameras.push(new Camera(0, -30));
// network.cameras.push(new Camera(0, -30));
// network.cameras.push(new Camera(0, -30));
// network.cameras.push(new Camera(0, -30));



