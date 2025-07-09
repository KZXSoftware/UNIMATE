
        document.querySelectorAll('.qa-question').forEach(btn => {
            btn.addEventListener('click', function () {
                this.classList.toggle('active');
                const answer = this.nextElementSibling;
                answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            });
        });

        // تأثير التمويه والشفافية عند التمرير
        let lastScrollPosition = 0;
        const background = document.querySelector('body::before');
        
        // نستخدم هذه الطريقة للوصول إلى العنصر الزائف
        const style = document.createElement('style');
        document.head.appendChild(style);
        
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            
            // حساب التمويه بناءً على اتجاه التمرير
            let blurValue = 0;
            if (scrollPosition > lastScrollPosition) {
                // التمرير للأسفل - زيادة التمويه
                blurValue = Math.min(5, (scrollPosition - lastScrollPosition) / 10);
            } else {
                // التمرير للأعلى - تقليل التمويه
                blurValue = Math.max(0, (lastScrollPosition - scrollPosition) / 10);
            }
            
            // حساب الشفافية
            const opacity = Math.max(0.1, 0.3 - (scrollPosition / 1000));
            
            // تطبيق التغييرات
            style.innerHTML = `
                body::before {
                    opacity: ${opacity};
                    filter: blur(${blurValue}px);
                }
            `;
            
            lastScrollPosition = scrollPosition;
        });
        
        document.getElementById('emailLink').addEventListener('click', () => {
            const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=your.email@gmail.com';
            window.open(gmailUrl, '_blank');
          });