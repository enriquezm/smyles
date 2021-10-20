import Draggable from 'react-draggable';
import { X } from 'react-feather';

import styles from './window.module.scss';

const Window = (props) => {
  const handleClick = (e) => {
    const buttonElement = e.target.parentNode;
    console.log(buttonElement);
    const nodeId = buttonElement.dataset.id;
    const containerElement = document.getElementById(nodeId);
    console.log(containerElement);
    containerElement.remove();
  }

  return (
    <Draggable>
    <div id={props.id} className={styles.container}>
        <header className={styles.container__header}>
          <h2 className={styles.container__title}>{props.title}</h2>
          <button 
            className={styles.container__exitButton}
            onClick={handleClick}
            data-id={props.id}
          >
            <X size={16} />
          </button>
        </header>
        <div className={styles.container__content}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus vitae nisi nec efficitur. Vivamus mi elit, ornare sit amet nulla ut, mattis tincidunt quam. Sed a blandit ex, et imperdiet lorem. Proin sollicitudin tempus metus, et feugiat dolor tincidunt eu. Phasellus laoreet sit amet nulla eu volutpat. Quisque elit diam, tristique eu volutpat nec, euismod vitae urna. Sed facilisis vel mauris ac tempus. Suspendisse sollicitudin felis molestie commodo elementum. Sed aliquet gravida libero. Ut mauris tellus, eleifend vel mauris vel, hendrerit bibendum ipsum.
          </p>
          <p>
            Donec vitae maximus ex, eu efficitur velit. Aenean suscipit pellentesque eleifend. In condimentum non urna sit amet venenatis. Aenean viverra erat vestibulum, posuere erat eget, vehicula purus. Sed rhoncus consequat metus in fermentum. Cras in ullamcorper justo, sit amet convallis lectus. Nam mattis, sapien ut tempus dictum, felis lectus rhoncus nibh, non ullamcorper ante neque non neque. Integer et tristique neque, quis venenatis est. In non mollis arcu, id ullamcorper diam. Quisque ornare eros lorem, eu pretium felis ultrices in. Maecenas efficitur ligula urna, nec pretium dolor blandit in. Duis lobortis velit aliquam, rhoncus erat nec, ultricies lectus. Nam vel dui tincidunt, molestie tortor quis, vestibulum purus. Integer sed malesuada est. Cras pharetra, sapien at dictum blandit, massa ex condimentum ante, ac euismod ex leo eget velit.
          </p>
        </div>
      </div>
    </Draggable>
  );
}

export default Window;
