import { Button, PrimaryButton } from '../buttons';
import { Screen } from '../layout';

export default function ConfirmationScreen({ children, title, onCancel, onConfirm}) {

    return <Screen title={ title }>
      <div className="content">
        { children }
      </div>
      <div className="actions">
        <PrimaryButton text="Confirm" onAction={ onConfirm } />
        <Button text="Cancel" onAction={ onCancel } />
      </div>
    </Screen>;
  }