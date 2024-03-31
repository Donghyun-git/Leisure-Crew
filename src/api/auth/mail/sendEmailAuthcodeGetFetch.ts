import { apiFetch } from '@api/common';
import {} from '../../model';

export interface SendEmailAuthcodeFetchParams {
  email: string;
}

export interface SendEmailAuthcodeResponse {}

/**
 * 이메일 인증 코드 전송
 * @method GET
 */
export const sendEmailAuthcodeGetFetch = ({
  email,
}: SendEmailAuthcodeFetchParams) =>
  apiFetch.get<SendEmailAuthcodeResponse>(`/mail/auth?email=${email}`);
