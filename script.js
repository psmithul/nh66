// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Navigation functionality
    initNavigation();
    
    // Initialize charts
    initCharts();
    
    // Initialize animations
    initAnimations();
    
    // Initialize form handling
    initForms();
    
    // Initialize market ticker animation
    initMarketTicker();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize responsive navigation
    initMobileNav();
});

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    // Update active nav link based on scroll position
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize all charts
function initCharts() {
    initHeroChart();
    initAllocationChart();
    initPerformanceChart();
}

// Hero section chart
function initHeroChart() {
    const ctx = document.getElementById('heroChart');
    if (!ctx) return;
    
    // Generate fake historical data for the last 30 days
    const days = 30;
    const labels = [];
    const data = [];
    const baseValue = 100;
    let currentValue = baseValue;
    
    for (let i = days; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        labels.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
        
        // Simulate market movement with slight upward trend
        const change = (Math.random() - 0.45) * 3; // Slight positive bias
        currentValue += change;
        data.push(currentValue.toFixed(2));
    }
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Portfolio Value',
                data: data,
                borderColor: '#00ff88',
                backgroundColor: 'rgba(0, 255, 136, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointHoverBorderColor: '#00ff88',
                pointHoverBackgroundColor: '#0a0a0a'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#1e1e1e',
                    titleColor: '#ffffff',
                    bodyColor: '#b0b0b0',
                    borderColor: '#333333',
                    borderWidth: 1,
                    displayColors: false,
                    callbacks: {
                        title: function(context) {
                            return context[0].label;
                        },
                        label: function(context) {
                            return `Value: $${context.parsed.y}K`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    display: true,
                    grid: {
                        color: '#333333',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#808080',
                        maxTicksLimit: 6
                    }
                },
                y: {
                    display: true,
                    grid: {
                        color: '#333333',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#808080',
                        callback: function(value) {
                            return '$' + value + 'K';
                        }
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });
}

// Portfolio allocation pie chart
function initAllocationChart() {
    const ctx = document.getElementById('allocationChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Technology', 'Healthcare', 'Finance', 'Consumer', 'Energy', 'Other'],
            datasets: [{
                data: [35, 20, 15, 12, 10, 8],
                backgroundColor: [
                    '#00ff88',
                    '#00cc6a',
                    '#33ffaa',
                    '#66ffbb',
                    '#99ffcc',
                    '#ccffdd'
                ],
                borderColor: '#1a1a1a',
                borderWidth: 3,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#b0b0b0',
                        padding: 20,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    backgroundColor: '#1e1e1e',
                    titleColor: '#ffffff',
                    bodyColor: '#b0b0b0',
                    borderColor: '#333333',
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            },
            cutout: '70%'
        }
    });
}

// Performance chart
function initPerformanceChart() {
    const ctx = document.getElementById('performanceChart');
    if (!ctx) return;
    
    // Generate 12 months of performance data
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const fundData = [];
    const benchmarkData = [];
    let fundValue = 100;
    let benchmarkValue = 100;
    
    months.forEach((month, index) => {
        // Fund performance (slightly outperforming)
        const fundChange = (Math.random() - 0.4) * 8; // Positive bias
        fundValue += fundChange;
        fundData.push(fundValue.toFixed(1));
        
        // Benchmark performance (S&P 500 like)
        const benchmarkChange = (Math.random() - 0.45) * 6;
        benchmarkValue += benchmarkChange;
        benchmarkData.push(benchmarkValue.toFixed(1));
    });
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Nexus Capital Fund',
                    data: fundData,
                    borderColor: '#00ff88',
                    backgroundColor: 'rgba(0, 255, 136, 0.1)',
                    borderWidth: 3,
                    fill: false,
                    tension: 0.4,
                    pointRadius: 4,
                    pointHoverRadius: 8,
                    pointBackgroundColor: '#00ff88',
                    pointBorderColor: '#0a0a0a',
                    pointBorderWidth: 2
                },
                {
                    label: 'S&P 500 Benchmark',
                    data: benchmarkData,
                    borderColor: '#808080',
                    backgroundColor: 'rgba(128, 128, 128, 0.1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                    pointRadius: 3,
                    pointHoverRadius: 6,
                    pointBackgroundColor: '#808080',
                    pointBorderColor: '#0a0a0a',
                    pointBorderWidth: 2,
                    borderDash: [5, 5]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#b0b0b0',
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    backgroundColor: '#1e1e1e',
                    titleColor: '#ffffff',
                    bodyColor: '#b0b0b0',
                    borderColor: '#333333',
                    borderWidth: 1,
                    displayColors: true
                }
            },
            scales: {
                x: {
                    grid: {
                        color: '#333333',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#808080'
                    }
                },
                y: {
                    grid: {
                        color: '#333333',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#808080',
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

// Initialize animations
function initAnimations() {
    // Animate numbers on scroll
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe stat numbers
    document.querySelectorAll('.stat-number, .metric-value, .stat-value').forEach(el => {
        observer.observe(el);
    });
    
    // Observe cards for slide-in animation
    document.querySelectorAll('.ticker-item, .stat-card, .team-member').forEach(el => {
        observer.observe(el);
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
    });
    
    const slideObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.ticker-item, .stat-card, .team-member').forEach(el => {
        slideObserver.observe(el);
    });
}

// Animate numbers
function animateNumbers(element) {
    const text = element.textContent;
    const number = parseFloat(text.replace(/[^0-9.-]/g, ''));
    
    if (isNaN(number)) return;
    
    const prefix = text.includes('$') ? '$' : '';
    const suffix = text.includes('%') ? '%' : text.includes('M') ? 'M' : text.includes('K') ? 'K' : '';
    
    let current = 0;
    const increment = number / 60; // 60 frames for 1 second
    const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
            current = number;
            clearInterval(timer);
        }
        
        let displayValue = current.toFixed(number % 1 === 0 ? 0 : 1);
        element.textContent = prefix + displayValue + suffix;
    }, 16); // ~60fps
}

// Initialize forms
function initForms() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = '#00ff88';
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    this.reset();
                }, 2000);
            }, 1500);
        });
    }
}

// Initialize market ticker animation
function initMarketTicker() {
    const tickers = document.querySelectorAll('.ticker-item');
    
    setInterval(() => {
        tickers.forEach(ticker => {
            const priceElement = ticker.querySelector('.ticker-price');
            const changeElement = ticker.querySelector('.ticker-change');
            
            if (priceElement && changeElement) {
                // Simulate price changes
                const currentPrice = parseFloat(priceElement.textContent.replace(/[^0-9.-]/g, ''));
                const change = (Math.random() - 0.5) * currentPrice * 0.002; // ±0.2% change
                const newPrice = currentPrice + change;
                
                // Update price
                priceElement.textContent = newPrice.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });
                
                // Update change percentage
                const changePercent = (change / currentPrice) * 100;
                const sign = changePercent >= 0 ? '+' : '';
                changeElement.textContent = sign + changePercent.toFixed(2) + '%';
                changeElement.className = changePercent >= 0 ? 'ticker-change positive' : 'ticker-change negative';
                
                // Add flash animation
                priceElement.style.background = changePercent >= 0 ? 'rgba(0, 255, 136, 0.2)' : 'rgba(255, 68, 68, 0.2)';
                setTimeout(() => {
                    priceElement.style.background = '';
                }, 200);
            }
        });
    }, 3000); // Update every 3 seconds
}

// Initialize smooth scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize mobile navigation
function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Add mobile navigation styles dynamically
const mobileNavStyles = `
    @media (max-width: 768px) {
        .nav-toggle.active .bar:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.active .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }
        
        .nav-toggle.active .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
        
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background-color: rgba(10, 10, 10, 0.98);
            width: 100%;
            text-align: center;
            transition: 0.3s;
            backdrop-filter: blur(10px);
            border-top: 1px solid #333333;
            padding: 2rem 0;
        }
        
        .nav-menu.active {
            left: 0;
        }
        
        .nav-menu li {
            margin: 1rem 0;
        }
    }
`;

// Inject mobile styles
const styleSheet = document.createElement('style');
styleSheet.textContent = mobileNavStyles;
document.head.appendChild(styleSheet);

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Button hover effects
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Table row hover effects
    document.querySelectorAll('.holdings tbody tr').forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#252525';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
    
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });
    
    // Loading screen simulation
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
});

// Real-time clock for trading hours
function updateTradingStatus() {
    const now = new Date();
    const marketOpen = new Date();
    marketOpen.setHours(9, 30, 0, 0); // 9:30 AM
    const marketClose = new Date();
    marketClose.setHours(16, 0, 0, 0); // 4:00 PM
    
    const isWeekday = now.getDay() >= 1 && now.getDay() <= 5;
    const isMarketHours = now >= marketOpen && now <= marketClose;
    
    // You can add market status indicator here
    return isWeekday && isMarketHours;
}

// Performance monitoring
function trackPerformance() {
    // Add analytics tracking here if needed
    console.log('Page performance metrics can be tracked here');
}

// Error handling
window.addEventListener('error', function(e) {
    console.log('Error handled:', e.error);
    // Add error reporting here if needed
});

// Initialize everything when page loads
window.addEventListener('load', function() {
    trackPerformance();
}); 