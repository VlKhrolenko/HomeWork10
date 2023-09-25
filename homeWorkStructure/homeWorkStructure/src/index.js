//Вам необхідно використовувати масив нотифікацій з минулих занять.
// До отриманого під час групування об'єкта notifications, вам необхідно додати ітератор,
// щоб під час перебору в циклі for of ми отримували кожен елемент
// із вкладених списків об'єкта notifications таким чином, немов працюємо з "плоским" масивом.


const notifications = [
    { text: 'Alice', source: 'facebook', date: '19/09/2023' },
    { text: 'Bob', source: 'facebook', date: '19/09/2023' },
    { text: 'Charlie', source: 'telegram', date: '19/09/2023' },
];

const notificationsMap = new Map();

notifications.forEach(notification => {
    const source = notification.source;
    if (notificationsMap.has(source)) {
        notificationsMap.get(source).push(notification);
    } else {
        notificationsMap.set(source, [notification]);
    }
});


notificationsMap[Symbol.iterator] = function* () {
    for (const notifications of this.values()) {
        for (const notification of notifications) {
            yield notification;
        }
    }
};

for (const notification of notificationsMap) {
    console.log(notification);
}