import { createMachine } from 'xstate';

export const toggleMachine = createMachine({
	/** @xstate-layout N4IgpgJg5mDOIC5QBcD2UoBswDoCWAdgIYDGyeAbmAMQAqA8gOKMAyAogNoAMAuoqAAdUsPOVQF+IAB6IAjABYAbDkWqAzACYAnIu0B2RQA5FAVgA0IAJ5z5WnHvmyNB01zeHD8gL5eLaDNg4pORUdEysnLySQiJiEkjSciaGOLKGaoZcjlpKpmqKFtYI8ioaXJqyavKGWjq2hj6+IASoEHCS-lhg0cKieOKSMggAtAVWiMOGGjgmqjpOpmUayz5+6F34xGSU3QkxfQMJQ-IahYiGejhuasnaHlwK2qsgnYHBOz2x-fGgQxqGshwWhuOhqagy8hMWj0ZwQNRm5VuWnujz0jS8QA */
	id: 'toggle',
	initial: 'inactive',
	states: {
		inactive: {
			on: { TOGGLE: 'active' }
		},
		active: {
			on: { TOGGLE: 'inactive' }
		}
	}
});
