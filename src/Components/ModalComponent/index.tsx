// Types
import ModalComponentPropsType from '../../Model/ModalComponentProps';

const ModalComponent: React.FC<ModalComponentPropsType> = (
  props
): JSX.Element => {
  return (
    <div>
      <h3>{props.title ?? 'Title'}</h3>
      <br />
      <p>{props.body ?? 'Body'}</p>
      <br />
      <>{props.others}</>
    </div>
  );
};

export default ModalComponent;
