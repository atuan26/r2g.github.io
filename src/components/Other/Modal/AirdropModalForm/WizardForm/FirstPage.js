import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { EventInput, SubmitButton } from '../../EventModal/EventInput'
import validate from '../validate'
import renderField from './renderField'

const WizardFormFirstPage = props => {
  const { error, handleSubmit, submitting } =
    props;
  return (
    <form onSubmit={handleSubmit} className="flex justify-between flex-col rounded-lg px-6 overflow-y-scroll max-h-[80vh] min-h-[60vh] pb-6 ">
      <div className='mt-4 px-4'>
        <Field
          name="name"
          type="text"
          component={EventInput}
          label="Name"
          required={true}
        />
        <Field
          name="link"
          type="text"
          component={EventInput}
          label="Link"
          required={true}
        />
        <Field
          name="information.reward"
          type="text"
          component={EventInput}
          label="Reward"
        />
        <Field
          name="information.winner"
          type="text"
          component={EventInput}
          label="Winner"
        />

      </div>
      <div className='flex justify-center'>
        <div className='w-1/2 '>
          <SubmitButton
            label="Next"
          />
        </div>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'airdropForm', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFirstPage)