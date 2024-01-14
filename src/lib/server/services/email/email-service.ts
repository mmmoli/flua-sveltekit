import { render as renderEmail } from 'svelte-email';
import type { ComponentProps, ComponentType, SvelteComponent } from 'svelte';
import { Resend } from 'resend';
import { EMAIL_RESEND_API_KEY, EMAIL_DEFAULT_FROM, NODE_ENV } from '$env/static/private';
import { Fail, Ok, type IResult } from 'rich-domain';

export interface SendProps<Component extends SvelteComponent> {
	subject: string;
	to: string;
	template: ComponentType<Component>;
	props?: ComponentProps<Component>;
}

export class EmailService {
	client: Resend;

	constructor() {
		this.client = new Resend(EMAIL_RESEND_API_KEY);
	}

	async sendEmail<Component extends SvelteComponent>({
		template,
		props,
		to,
		subject
	}: SendProps<Component>): Promise<IResult<void>> {
		const emailHtml = renderEmail({ template, props });
		const emailText = renderEmail({
			template,
			props,
			options: {
				plainText: true
			}
		});

		if (NODE_ENV === 'production') {
			const { error } = await this.client.emails.send({
				from: EMAIL_DEFAULT_FROM,
				to,
				subject,
				html: emailHtml,
				text: emailText
			});
			if (error) return Fail(error.message);
			return Ok();
		} else {
			console.log(emailText);
			return Ok();
		}
	}
}
