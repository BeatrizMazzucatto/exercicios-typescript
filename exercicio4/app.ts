import { Logger } from './logger';

const userLogger = new Logger({ module: "UserModule" });
const paymentLogger = new Logger({ module: "PaymentModule" });

userLogger.info("Usuário criado com sucesso");
paymentLogger.warn("Pagamento em atraso");
paymentLogger.error("Falha ao processar pagamento");