## ADDED Requirements

### Requirement: Типизация типов угроз

Система SHALL определять TypeScript enum для всех типов угроз кибербезопасности.

#### Scenario: Определение типа phishing

- **WHEN** разработчик использует тип угрозы для phishing атаки
- **THEN** система предоставляет `ThreatType.PHISHING` со значением `'phishing'`

#### Scenario: Определение типа SQL injection

- **WHEN** разработчик использует тип угрозы для SQL injection
- **THEN** система предоставляет `ThreatType.SQL_INJECTION` со значением `'sql_injection'`

#### Scenario: Определение типа XSS

- **WHEN** разработчик использует тип угрозы для XSS атаки
- **THEN** система предоставляет `ThreatType.XSS` со значением `'xss'`

#### Scenario: Определение типа hardcoded credentials

- **WHEN** разработчик использует тип угрозы для захардкоженных учетных данных
- **THEN** система предоставляет `ThreatType.HARDCODED_CREDENTIALS` со значением `'hardcoded_credentials'`

#### Scenario: Определение типа brute force

- **WHEN** разработчик использует тип угрозы для brute force атаки
- **THEN** система предоставляет `ThreatType.BRUTE_FORCE` со значением `'brute_force'`

#### Scenario: Определение типа data exfiltration

- **WHEN** разработчик использует тип угрозы для утечки данных
- **THEN** система предоставляет `ThreatType.DATA_EXFILTRATION` со значением `'data_exfiltration'`

### Requirement: Типизация уровней сложности

Система SHALL определять TypeScript enum для всех уровней сложности игры.

#### Scenario: Определение уровня Junior

- **WHEN** разработчик использует уровень сложности Junior Analyst
- **THEN** система предоставляет `LevelDifficulty.JUNIOR` со значением `'junior'`

#### Scenario: Определение уровня Middle

- **WHEN** разработчик использует уровень сложности Middle Analyst
- **THEN** система предоставляет `LevelDifficulty.MIDDLE` со значением `'middle'`

#### Scenario: Определение уровня Senior

- **WHEN** разработчик использует уровень сложности Senior Analyst
- **THEN** система предоставляет `LevelDifficulty.SENIOR` со значением `'senior'`

#### Scenario: Определение уровня CISO

- **WHEN** разработчик использует уровень сложности CISO Challenge
- **THEN** система предоставляет `LevelDifficulty.CISO` со значением `'ciso'`

### Requirement: Типизация типов миссий

Система SHALL определять TypeScript enum для всех типов миссий.

#### Scenario: Определение типа email миссии

- **WHEN** разработчик использует тип миссии для анализа email
- **THEN** система предоставляет `MissionType.EMAIL` со значением `'email'`

#### Scenario: Определение типа code миссии

- **WHEN** разработчик использует тип миссии для ревью кода
- **THEN** система предоставляет `MissionType.CODE` со значением `'code'`

#### Scenario: Определение типа logs миссии

- **WHEN** разработчик использует тип миссии для анализа логов
- **THEN** система предоставляет `MissionType.LOGS` со значением `'logs'`

### Requirement: Типизация игровых режимов

Система SHALL определять TypeScript enum для всех игровых режимов.

#### Scenario: Определение режима Email Analysis

- **WHEN** разработчик использует режим анализа email
- **THEN** система предоставляет `GameMode.EMAIL_ANALYSIS` со значением `'email_analysis'`

#### Scenario: Определение режима Code Review

- **WHEN** разработчик использует режим ревью кода
- **THEN** система предоставляет `GameMode.CODE_REVIEW` со значением `'code_review'`

#### Scenario: Определение режима ClickHouse Logs

- **WHEN** разработчик использует режим анализа логов
- **THEN** система предоставляет `GameMode.CLICKHOUSE_LOGS` со значением `'clickhouse_logs'`

### Requirement: Типизация состояния игры

Система SHALL определять TypeScript интерфейс для состояния игры.

#### Scenario: Определение полей GameState

- **WHEN** разработчик создает объект состояния игры
- **THEN** система требует наличие полей `currentMissionId`, `currentMode`, `elapsedTime`, `isPaused`, `foundThreats`

#### Scenario: Типизация currentMissionId

- **WHEN** разработчик устанавливает `currentMissionId`
- **THEN** система требует тип `string | null`

#### Scenario: Типизация currentMode

- **WHEN** разработчик устанавливает `currentMode`
- **THEN** система требует тип `GameMode`

#### Scenario: Типизация elapsedTime

- **WHEN** разработчик устанавливает `elapsedTime`
- **THEN** система требует тип `number` (секунды)

#### Scenario: Типизация isPaused

- **WHEN** разработчик устанавливает `isPaused`
- **THEN** система требует тип `boolean`

#### Scenario: Типизация foundThreats

- **WHEN** разработчик устанавливает `foundThreats`
- **THEN** система требует тип `string[]` (массив идентификаторов угроз)

### Requirement: Типизация состояния игрока

Система SHALL определять TypeScript интерфейс для состояния игрока.

#### Scenario: Определение полей PlayerState

- **WHEN** разработчик создает объект состояния игрока
- **THEN** система требует наличие полей `score`, `currentLevel`, `achievements`, `stats`

#### Scenario: Типизация score

- **WHEN** разработчик устанавливает `score`
- **THEN** система требует тип `number`

#### Scenario: Типизация currentLevel

- **WHEN** разработчик устанавливает `currentLevel`
- **THEN** система требует тип `LevelDifficulty`

#### Scenario: Типизация achievements

- **WHEN** разработчик устанавливает `achievements`
- **THEN** система требует тип `string[]` (массив идентификаторов достижений)

#### Scenario: Типизация stats

- **WHEN** разработчик устанавливает `stats`
- **THEN** система требует тип `PlayerStats` с полями `missionsCompleted`, `threatsFound`, `mistakes`

### Requirement: Типизация статистики игрока

Система SHALL определять TypeScript интерфейс для статистики игрока.

#### Scenario: Определение полей PlayerStats

- **WHEN** разработчик создает объект статистики игрока
- **THEN** система требует наличие полей `missionsCompleted`, `threatsFound`, `mistakes`

#### Scenario: Типизация всех полей статистики

- **WHEN** разработчик устанавливает любое поле статистики
- **THEN** система требует тип `number` для всех полей
