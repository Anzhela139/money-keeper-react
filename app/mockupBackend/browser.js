import { handlers } from './handlers'
let worker = null;
if (typeof window !== 'undefined') {
    const { setupWorker } = await import('msw/browser');
    worker = setupWorker(...handlers)
}
export default worker