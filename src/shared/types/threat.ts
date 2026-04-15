/**
 * Типы угроз кибербезопасности
 */
export enum ThreatType {
  /** Фишинговая атака */
  PHISHING = 'phishing',
  /** SQL инъекция */
  SQL_INJECTION = 'sql_injection',
  /** Межсайтовый скриптинг */
  XSS = 'xss',
  /** Захардкоженные учетные данные */
  HARDCODED_CREDENTIALS = 'hardcoded_credentials',
  /** Атака перебором */
  BRUTE_FORCE = 'brute_force',
  /** Утечка данных */
  DATA_EXFILTRATION = 'data_exfiltration',
}
