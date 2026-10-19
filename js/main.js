/**
 * Main Application Logic
 * Wahyu Pambudi, S.Kom. - Portfolio
 */

document.addEventListener("DOMContentLoaded", () => {
    // Initialize Lucide Icons
    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

    // Dynamic Current Year
    const yearEl = document.getElementById("current-year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Mobile Navigation Toggle
    const mobileToggle = document.getElementById("mobile-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });

        document.querySelectorAll(".mobile-nav-link").forEach((link) => {
            link.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");
            });
        });
    }

    // Portfolio Category Filtering
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            // Manage active button styles
            filterButtons.forEach((b) => {
                b.classList.remove("active", "bg-brand-600", "text-white", "shadow-md");
                b.classList.add("glass-card", "text-slate-300");
            });
            btn.classList.add("active", "bg-brand-600", "text-white", "shadow-md");
            btn.classList.remove("glass-card", "text-slate-300");

            const filterValue = btn.getAttribute("data-filter");

            projectCards.forEach((card) => {
                if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        });
    });

    // Close Modal Event Listeners
    const projectModal = document.getElementById("project-modal");
    if (projectModal) {
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && !projectModal.classList.contains("hidden")) {
                closeDetailModal();
            }
        });

        projectModal.addEventListener("click", (e) => {
            if (e.target === projectModal) {
                closeDetailModal();
            }
        });
    }
});

// Modal Details Handling
function openDetailModal(key) {
    const projectModal = document.getElementById("project-modal");
    const modalContent = document.getElementById("modal-content");
    if (!projectModal || !modalContent || typeof projectDatabase === "undefined") return;

    const data = projectDatabase[key];
    if (!data) return;

    const techBadges = data.tech
        .map(
            (t) =>
                `<span class="px-2.5 py-1 rounded-md bg-slate-800 text-xs font-medium text-brand-300 border border-slate-700/60">${t}</span>`
        )
        .join("");

    const featureList = data.features
        .map(
            (f) =>
                `<li class="flex items-start gap-2 text-sm text-slate-300"><span class="text-brand-400 mt-0.5">•</span><span>${f}</span></li>`
        )
        .join("");

    let liveLinkHtml = "";
    if (data.liveUrl) {
        liveLinkHtml = `
      <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition">
        <span>Buka Website (${data.domain})</span>
        <i data-lucide="external-link" class="w-4 h-4"></i>
      </a>
    `;
    }

    modalContent.innerHTML = `
    <div>
      <span class="text-xs font-semibold px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-400 uppercase tracking-wider">${data.category}</span>
      <h3 class="text-2xl font-bold text-white mt-2 mb-1">${data.title}</h3>
      <p class="text-xs text-slate-400 font-medium">Peran: ${data.role} | Target: ${data.domain}</p>
    </div>

    <p class="text-sm text-slate-300 leading-relaxed">${data.description}</p>

    <div>
      <h4 class="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2.5">Fitur & Arsitektur Utama:</h4>
      <ul class="space-y-1.5">${featureList}</ul>
    </div>

    <div>
      <h4 class="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2.5">Teknologi yang Diterapkan:</h4>
      <div class="flex flex-wrap gap-2">${techBadges}</div>
    </div>

    <div class="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
      ${liveLinkHtml}
      <button onclick="closeDetailModal()" class="px-5 py-2.5 rounded-xl glass-card text-slate-300 hover:text-white text-sm font-medium transition ml-auto">
        Tutup
      </button>
    </div>
  `;

    projectModal.classList.remove("hidden");
    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }
}

function closeDetailModal() {
    const projectModal = document.getElementById("project-modal");
    if (projectModal) {
        projectModal.classList.add("hidden");
    }
}

// Interactive Toast Notification
function showToast(title, message) {
    const toast = document.getElementById("toast");
    const toastTitle = document.getElementById("toast-title");
    const toastMessage = document.getElementById("toast-message");
    if (!toast || !toastTitle || !toastMessage) return;

    toastTitle.textContent = title;
    toastMessage.textContent = message;

    toast.classList.remove("hidden");
    toast.classList.add("flex");

    setTimeout(() => {
        toast.classList.add("hidden");
        toast.classList.remove("flex");
    }, 4500);
}

// Contact Form Handling
function handleContactSubmit(event) {
    event.preventDefault();
    const nameEl = document.getElementById("name");
    const subjectEl = document.getElementById("subject");
    const messageEl = document.getElementById("message");
    const btn = document.getElementById("submit-btn");

    if (!nameEl || !subjectEl || !messageEl || !btn) return;

    const name = nameEl.value.trim();
    const subject = subjectEl.value;

    const originalText = btn.innerHTML;
    btn.innerHTML = `<span class="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></span> Mengirim...`;
    btn.disabled = true;

    // Simulate sending delay
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        const form = document.getElementById("contact-form");
        if (form) form.reset();
        showToast(
            "Pesan Berhasil Dikirim!",
            `Halo ${name}, terima kasih atas ketertarikan Anda pada ${subject}. Wahyu akan segera menghubungi Anda kembali!`
        );
    }, 800);
}
