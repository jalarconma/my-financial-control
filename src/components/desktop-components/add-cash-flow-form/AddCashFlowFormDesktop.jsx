import useForm from '../../../hooks/use-form/use-form';
import { FlowType } from '../../../models';
import Button from '../../cross-components/button/Button';
import Card from '../../cross-components/card/Card';
import validate from '../../utils/cashflow-validations';

import styles from './AddCashFlowFormDesktop.module.scss';

const AddCashFlowFormDesktop = ({onAdd, onClose}) => {
  const {
    formState,
    inputChangeHandler,
    inputBlurHandler,
    submitHandler } = useForm({ description: '', value: '', type: '', date: '' }, onAdd, validate);

  const { inputs } = formState;

  const showDescriptionError = !inputs.description.isValid && inputs.description.touched;
  const showValueError = !inputs.value.isValid && inputs.value.touched;
  const showDateError = !inputs.date.isValid && inputs.date.touched;
  const showTypeError = !inputs.type.isValid && inputs.type.touched;

  return (
    <Card >
      <h3>Add Cash Flow</h3>
      <form onSubmit={submitHandler}>
        <div className={styles['control-group']}>
          <div className={styles['form-control']}>
            <label htmlFor='description'>Description</label>
            <input required type='text' id='description' name='description' value={inputs.description.value} onChange={inputChangeHandler} onBlur={inputBlurHandler}/>
            {showDescriptionError && <p className={styles['error-text']}>{inputs.description.errors}</p>}
          </div>
          <div className={styles['form-control']}>
            <label htmlFor='value'>Value</label>
            <input required type='number' id='value' name='value' value={inputs.value.value} onChange={inputChangeHandler} onBlur={inputBlurHandler} />
            {showValueError && <p className={styles['error-text']}>{inputs.value.errors}</p>}
          </div>
          <div className={styles['form-control']}>
            <label htmlFor='date'>Date</label>
            <input required type='date' id='date' name='date' value={inputs.date.value} onChange={inputChangeHandler} onBlur={inputBlurHandler} />
            {showDateError && <p className={styles['error-text']}>{inputs.date.errors}</p>}
          </div>
          <div className={styles['form-control']}>
            <label htmlFor='type'>Type</label>
            <select required name="type" id="type" onChange={inputChangeHandler} onBlur={inputBlurHandler}>
              <option value={null}>Select an option</option>
              <option value={FlowType.INCOME}>Income</option>
              <option value={FlowType.EXPENSE}>Expense</option>
            </select>
            {showTypeError && <p className={styles['error-text']}>{inputs.type.errors}</p>}
          </div>
        </div>
        <div className={styles['form-actions']}>
          <Button type='button' onClick={onClose}>Cancel</Button>
          <Button type='submit' disabled={!formState.isValid}>Add</Button>
        </div>
      </form>
    </Card>
  )
}

export default AddCashFlowFormDesktop;