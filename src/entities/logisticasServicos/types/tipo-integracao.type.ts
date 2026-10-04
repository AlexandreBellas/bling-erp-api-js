/**
 * Tipagem referente ao tipo de integração para serviços de logística.
 */
export type ITipoIntegracao =
  | 'AmazonDBA'
  | 'B2WEntrega'
  | 'B2WO2O'
  /**
   * @deprecated Não consta na documentação oficial atual.
   */
  | 'Cainiao'
  | 'Correios'
  | 'CorreiosLog'
  | 'CustomLogistic'
  | 'DafitiMilkrun'
  | 'Envvias'
  | 'Frenet'
  | 'FreteDescomplicado'
  | 'Intelipost'
  | 'Jadlog'
  | 'Jamef'
  | 'Kangu'
  | 'LogisticaAliExpress'
  | 'LogisticaShopee'
  | 'Loggi'
  | 'MagaluEntregas'
  | 'Mandae'
  | 'MelhorEnvio'
  | 'MercadoEnvios'
  | 'OlistFulfillment'
  | 'TotalExpress'
  | ''
