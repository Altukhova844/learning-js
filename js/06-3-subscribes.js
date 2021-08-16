// Напиши скрипт проверки подписки юзера
// при доступе к контенту

// 3 вида подписки: free, pro, vip;
// Получить доступ могут только pro и vip.

const subscription = 'pro';

const canAccessContent = subscription==='pro'|| subscription==='vip';
console.log(`У этого юзера сть доступ к контенту?`, canAccessContent);

