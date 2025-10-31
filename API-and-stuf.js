console.log('api shit is up');

//#region
//#endregion

// صباح الفل يا صالح


//#region شرح عمايل الطلبات

const xhr = new XMLHttpRequest();
// كده عملت الريكوست

xhr.addEventListener('load',()=>{
    console.log(xhr.response,"xhr.response");
    // استناها تحمل عشان اتعامل معاها
})
// lode === the response is loded

xhr.open('GET', 'https://supersimplebackend.dev');
// GIT===Get info from backend
// the 2nd barametr is the URL
xhr.send();
// عشان نبعت الطلب ده بقى



// GET -> تجيب بيانات
// POST -> تبعت بيانات
// PUT -> تعدّل بيانات
// DELETE -> تمسح بيانات



// هنا كانك بتعمل زرار
// بتعمل الزرار (L 6)
// بتديه الـEventListener (L 9)
// بعدها تضغط عليه (L 18)

//#endregion

//#region شرح اولي للـPromise

Promise.all([
    // Array فيها وعود (Promises)
    // بيشتغلوا مع بعض بالتوازي
    // وPromise.all هيستنى كلهم يخلصوا
    // لو واحد فيهم فشل => الكل هيفشل


    new Promise((resolve)=>{
        // الحوار ده عشان الكود يشتغل بالتوازي وكده
        immaginiryFunction(()=>{
            resolve('باراميتر بين الدرجات');
            // بتقوله كده تمام خش عاللي بعده
        });

    }),

    new Promise((resolve)=>{
        immaginiryFunction(()=>{
            resolve();
        });

    })
]).then((values)=>{
    // الكود اللي في الاخر بقى
    console.log(values); 
    // دي هتعرض جملة "باراميتر بين الدرجات" واي حاجة كمان. هي كده هتعرض اثنين واحد فيهم فاضي

});

//#region Promise مهمش

// new Promise((resolve)=>{
//     // الحوار ده عشان الكود يشتغل بالتوازي وكده
//     immaginiryFunction(()=>{
//         resolve('باراميتر بين الدرجات');
//         // بتقوله كده تمام خش عاللي بعده
//     });

// }).then((value)=>{
//     // الخطوة اللي بعدها
//     console.log(value); 
//     // دي هتعرض جملة "باراميتر بين الدرجات"


//     return new Promise((resolve)=>{
//         immaginiryFunction(()=>{
//             resolve();
//         });

//     })
// })
//#endregion

// كل then بيرجع Promise جديد
// عشان كده لازم نعمل return عشان السلسلة تكمل


// Promise => حاجة هتحصل في المستقبل 
// resolve() => تمت بنجاح
// reject() => حصل Error
// then() => اللي بعد ما النجاح يحصل
// catch() => لو حصل Error
// finally() => هيتنفذ في كل الحالات

// Promise.all => يستنى كل الوعود تخلص
// Promise.race => أول Promise تخلص
// Promise.any => أول واحدة تنجح (مش تفشل)

//#endregion

//#region fetch()

// دي طريقة احسن لعمايل الطلب

function theMainFetchFunc(){

    const fetchVar = fetch('https://supersimplebackend.dev').then((response)=>{
        // fetch بتعمل GET تلقائي
        // fetch بتدي وعد تلقائي

        // هيستنى النتيجة لوحده ويخزنها
        return response.json()
        // هيحول النتيجة لجيسون
        // هينهي الفرع ده تلقائي
    }).then((data)=>{
        // data دي هيا الجيسون النهائي بعد ما اتحول معرفش ازاي

            //.json() نفسها بترجع Promise بتتحل لما التحويل يخلص.
            //وده ليه لازم نعمل return response.json() مش مجرد response.json().
    });

    return fetchVar;
}
theMainFetchFunc().then(()=>{
    // دي مرحلة بعد حوار الـفيتش اللي فوق
})

// fetch() => Promise
// response.json() => Promise بتحول الرد لـ Object جاهز
// response.text() => Promise بتحوله لـ نص
// response.ok => true لو الحالة 200
// response.status => رقم الحالة (مثلاً 404 أو 500)
// fetch(url, {method: 'POST', body, headers}) => لتعديل النوع
// لازم تعمل return response.json() جوه then


//#endregion

//#region async await
async function practiceFunc(params) {

    console.log('هنا نبدا حوارات');
    // دي هتغطي الامر ده بوعد تلقائي

    await funcThatTakeAlotOfTime();
    // await ينفع بس جوا async function
    // دلوقتي هيستناه لحد ما يخلص الاول بعدها يكمل بدل امر الـthen

                                                        //    return 'val22' ===== resolve('val22');
}
practiceFunc().then((val)=>{
    // دي الخطوة اللي وراها عشان بقت وعد اهي
            //    console.log(val); ===== 'val22';

});

// مثال
        function delay(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }

        async function loadData() {
            console.log('Loading...');
            await delay(2000); // تستنى 2 ثانية
            console.log('Done!');
            return 'Data ready';
        }

        loadData().then(console.log);
        // Loading...
        // (بعد 2 ثانية)
        // Done!
        // Data ready

//#endregion

//#region error

xhr.addEventListener('error', (errorInfo)=>{
    console.log('معلش');
    // error event بتشتغل لما يحصل مشكلة في الاتصال (مش في الكود)
});



try{
    throw 'myError'
    // انا عملت ايرور بنفسي كده

    // هنا الكود اللي ممكن يعمل مشاكل
}catch(error){
    console.log('معلش');
}
// try = جرب الكود
// catch = لو حصل Error، نفذ اللي هنا
// finally = بيتنفذ دايمًا بعد try/catch (حتى لو مفيش error)

                    try {
                        console.log('Before error');
                        throw new Error('حدث خطأ');
                    } catch (err) {
                        console.error(err.message);
                    } finally {
                        console.log('ده بيتنفذ في كل الحالات');
                    }



new Promise((resolve, reject) => {
    immaginiryFunction2(() => {
        // لو في مشكلة:
        // reject('errrrrrrrrrrooooooooorrrrrrrrrrrrr!!!!!!!!!!');
        resolve('ok');
    });
})
.then((value) => {
    console.log('نجاح:', value);
})
.catch((error) => {
    console.log('فشل:', error);
});


// resolve() = النجاح
// reject() = الفشل
// then() = بعد النجاح
// catch() = بعد الفشل
// finally() = دايمًا بيتنفذ في الآخر (نجاح أو فشل)



// .finally() دايمًا بيتنفذ سواء حصل error أو نجاح.
// Promise.race([p1, p2]) → أول وعد يخلص.
// Promise.any([p1, p2]) → أول وعد ينجح (مش يفشل).

// response.ok → بتكون true لو الحالة بين 200–299.  
// <3 <3

// response.status → رقم الحالة (200, 404, 500...).


//#endregion

//#region هبعت

    fetch('https://hgtrujfrsidokpoxl', {
        method: 'POST',
        // معناها إننا بنرسل بيانات للسيرفر مش بنطلب بيانات.
        
        headers: {
            'Content-Type' : 'application/json'
            // الـ headers دي زي الظرف اللي بيقول للسيرفر البيانات شكلها إيه.
        },
        body: JSON.stringify({
            // المحتوى اللي هيتبعت للسيرفر
            proprity : variable
        })
    });

//#endregion


// end