// عبط Local Storage:

localStorage.setItem('key', 'value');
// key = اسم الحاجة اللي هتخزنها
// value = لازم تكون String


localStorage.getItem('key');
// ترجعلك القيمة المخزنة (برضو String)

localStorage.removeItem('key');
// تشيل عنصر واحد بس

localStorage.clear();
// تمسح كل البيانات اللي في الـ local storage بتاعت الموقع ده


// الـ Local Storage بيخزن **Strings بس**


// من Object → String
JSON.stringify(object)

// من String → Object
JSON.parse(string)


// نحول الـ Object لسترينج ونخزنه
localStorage.setItem('userData', JSON.stringify(user));

// بعدين لما نقرأه من التخزين
let storedUser = JSON.parse(localStorage.getItem('userData'));
console.log(storedUser.name); // Abdo


//  كده الـ JSON.stringify بيخليك تقدر تخزن أي نوع بيانات
// والـ JSON.parse بيرجعه لطبيعته الأصلية


//   (بتتمسح لما تقفل التبويب أو المتصفح)




// | -------------- | -------------------------------------- | ------------------------ |
// | حفظ بيانات     | `localStorage.setItem('key', 'value')` | القيمة لازم تكون String |
// | قراءة بيانات   | `localStorage.getItem('key')`          | بترجع String أو null   |
// | حذف عنصر       | `localStorage.removeItem('key')`       | يحذف المفتاح المحدد    |
// | حذف الكل       | `localStorage.clear()`                 | يمسح كل حاجة            |
// | تخزين Object   | `JSON.stringify(obj)`                  | يحوله String            |
// | استرجاع Object | `JSON.parse(str)`                      | يرجعه Object            |
// | -------------- | -------------------------------------- | ------------------------ |