# user-management
test project for job interview

Не решенные проблемы:
1.Сохранение user'а с помощью api энд поинта (post:/clients) не работает, так как настройки сервера где лежит api не поддерживают метода OPTIONS. При кросс-доменном запросе браузер вначале шлёт запрос с методом OPTIONS, который не будет обработан сервером. Поэтому эту логику невозможно протестировать, хотя она и реализована.
2.Я смог добавить user'ов с помощью Postmen'а. Но добавленные user'ы не отображаются в таблице, потому что api, как я понимаю, возвращает первые 50 записей.
3. Так же не реализована клиентская валидация и валидация ошибок при запросах к api, в связи с первым пунктом.
