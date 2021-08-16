// Напиши скрипт,
//     котоый проверяет возможность открыть
//     чат с пользователемю

// ДЛя этого пользователь должен быть:
//     -другом
//     - онлайн
//     -без режима *не беспокоить* - Don Not Disturb

const isOnline = true;
const isFriend = true;
const isDnd = false;

const openChat = isFriend && isOnline && !isDnd;

console.log(`CAn i open chat with this User?`, openChat);