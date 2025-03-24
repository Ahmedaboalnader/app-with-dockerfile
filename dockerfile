# استخدم إصدار ثابت ومدعوم من Node.js
FROM node:18-alpine 

# ضبط مسار العمل داخل الحاوية
WORKDIR /usr/src/app

# نسخ وإعداد الحزم فقط
COPY ./app/package*.json ./app/package-lock.json ./
RUN npm install --production

# نسخ باقي ملفات التطبيق بعد تثبيت الحزم
COPY ./app . 

# تحديد المنفذ
EXPOSE 3000

# تشغيل التطبيق
CMD ["npm", "start"]

