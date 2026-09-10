/* =====================================================
   SURVEY MEMBUKTIKAN!
   GAME SHOW AKUNTANSI
===================================================== */


/* =====================================================
   DATA SOAL
===================================================== */

const questions = [

    {
        question:
            "Sebutkan akun yang termasuk aset!",

        answers: [
            {
                text: "Kas",
                points: 30,
                keywords: [
                    "kas",
                    "uang kas",
                    "uang tunai"
                ]
            },
            {
                text: "Piutang",
                points: 25,
                keywords: [
                    "piutang",
                    "piutang usaha"
                ]
            },
            {
                text: "Persediaan",
                points: 20,
                keywords: [
                    "persediaan",
                    "stok"
                ]
            },
            {
                text: "Gedung",
                points: 15,
                keywords: [
                    "gedung"
                ]
            },
            {
                text: "Peralatan",
                points: 10,
                keywords: [
                    "peralatan",
                    "alat"
                ]
            }
        ],

        optional: [
            "tanah",
            "kendaraan",
            "mesin"
        ]
    },


    {
        question:
            "Sebutkan contoh akun beban!",

        answers: [
            {
                text: "Gaji",
                points: 30,
                keywords: [
                    "gaji",
                    "beban gaji"
                ]
            },
            {
                text: "Sewa",
                points: 25,
                keywords: [
                    "sewa",
                    "beban sewa"
                ]
            },
            {
                text: "Listrik",
                points: 20,
                keywords: [
                    "listrik",
                    "beban listrik"
                ]
            },
            {
                text: "Air",
                points: 15,
                keywords: [
                    "air",
                    "beban air"
                ]
            },
            {
                text: "Iklan",
                points: 10,
                keywords: [
                    "iklan",
                    "beban iklan"
                ]
            }
        ],

        optional: [
            "transportasi",
            "telepon",
            "penyusutan"
        ]
    },


    {
        question:
            "Sebutkan bukti transaksi yang kamu ketahui!",

        answers: [
            {
                text: "Faktur",
                points: 30,
                keywords: [
                    "faktur",
                    "invoice"
                ]
            },
            {
                text: "Kuitansi",
                points: 25,
                keywords: [
                    "kuitansi",
                    "kwitansi"
                ]
            },
            {
                text: "Nota",
                points: 20,
                keywords: [
                    "nota"
                ]
            },
            {
                text: "Cek",
                points: 15,
                keywords: [
                    "cek"
                ]
            },
            {
                text: "Bilyet",
                points: 10,
                keywords: [
                    "bilyet",
                    "bilyet giro"
                ]
            }
        ],

        optional: [
            "memo",
            "rekening",
            "rekening koran",
            "struk"
        ]
    },


    {
        question:
            "Sebutkan jenis jurnal dalam akuntansi!",

        answers: [
            {
                text: "Jurnal Umum",
                points: 30,
                keywords: [
                    "umum",
                    "jurnal umum"
                ]
            },
            {
                text: "Jurnal Penjualan",
                points: 25,
                keywords: [
                    "penjualan",
                    "jurnal penjualan"
                ]
            },
            {
                text: "Jurnal Pembelian",
                points: 20,
                keywords: [
                    "pembelian",
                    "jurnal pembelian"
                ]
            },
            {
                text: "Jurnal Penerimaan",
                points: 15,
                keywords: [
                    "penerimaan",
                    "penerimaan kas",
                    "jurnal penerimaan kas"
                ]
            },
            {
                text: "Jurnal Pengeluaran",
                points: 10,
                keywords: [
                    "pengeluaran",
                    "pengeluaran kas",
                    "jurnal pengeluaran kas"
                ]
            }
        ],

        optional: [
            "memorial",
            "jurnal memorial",
            "kas"
        ]
    },


    {
        question:
            "Sebutkan akun yang bersaldo normal debit!",

        answers: [
            {
                text: "Kas",
                points: 30,
                keywords: [
                    "kas"
                ]
            },
            {
                text: "Piutang",
                points: 25,
                keywords: [
                    "piutang"
                ]
            },
            {
                text: "Peralatan",
                points: 20,
                keywords: [
                    "peralatan"
                ]
            },
            {
                text: "Persediaan",
                points: 15,
                keywords: [
                    "persediaan",
                    "stok"
                ]
            },
            {
                text: "Beban",
                points: 10,
                keywords: [
                    "beban"
                ]
            }
        ],

        optional: [
            "tanah",
            "gedung",
            "kendaraan",
            "mesin"
        ]
    },


    {
        question:
            "Sebutkan akun yang bersaldo normal kredit!",

        answers: [
            {
                text: "Utang",
                points: 30,
                keywords: [
                    "utang",
                    "hutang"
                ]
            },
            {
                text: "Modal",
                points: 25,
                keywords: [
                    "modal",
                    "ekuitas"
                ]
            },
            {
                text: "Pendapatan",
                points: 20,
                keywords: [
                    "pendapatan",
                    "penghasilan"
                ]
            },
            {
                text: "Akumulasi",
                points: 15,
                keywords: [
                    "akumulasi",
                    "akumulasi penyusutan"
                ]
            },
            {
                text: "Pinjaman",
                points: 10,
                keywords: [
                    "pinjaman",
                    "pinjaman bank"
                ]
            }
        ],

        optional: [
            "utang usaha",
            "hutang usaha",
            "utang bank",
            "hutang bank"
        ]
    },


    {
        question:
            "Sebutkan laporan keuangan yang kamu ketahui!",

        answers: [
            {
                text: "Neraca",
                points: 30,
                keywords: [
                    "neraca",
                    "laporan posisi keuangan"
                ]
            },
            {
                text: "Laba",
                points: 25,
                keywords: [
                    "laba",
                    "laba rugi",
                    "laporan laba rugi"
                ]
            },
            {
                text: "Arus",
                points: 20,
                keywords: [
                    "arus",
                    "arus kas",
                    "laporan arus kas"
                ]
            },
            {
                text: "Perubahan",
                points: 15,
                keywords: [
                    "perubahan",
                    "perubahan ekuitas",
                    "laporan perubahan ekuitas"
                ]
            },
            {
                text: "Catatan",
                points: 10,
                keywords: [
                    "catatan",
                    "catatan atas laporan keuangan",
                    "calk"
                ]
            }
        ],

        optional: [
            "ekuitas",
            "laporan ekuitas",
            "posisi keuangan"
        ]
    },


    {
        question:
            "Sebutkan hal yang dapat menambah modal!",

        answers: [
            {
                text: "Investasi",
                points: 30,
                keywords: [
                    "investasi",
                    "investasi pemilik"
                ]
            },
            {
                text: "Pendapatan",
                points: 25,
                keywords: [
                    "pendapatan",
                    "penghasilan"
                ]
            },
            {
                text: "Laba",
                points: 20,
                keywords: [
                    "laba",
                    "laba bersih"
                ]
            },
            {
                text: "Setoran",
                points: 15,
                keywords: [
                    "setoran",
                    "setoran modal",
                    "modal disetor"
                ]
            },
            {
                text: "Keuntungan",
                points: 10,
                keywords: [
                    "keuntungan"
                ]
            }
        ],

        optional: [
            "modal masuk"
        ]
    },


    {
        question:
            "Sebutkan akun yang biasa terdapat pada perusahaan jasa!",

        answers: [
            {
                text: "Kas",
                points: 30,
                keywords: [
                    "kas"
                ]
            },
            {
                text: "Piutang",
                points: 25,
                keywords: [
                    "piutang"
                ]
            },
            {
                text: "Peralatan",
                points: 20,
                keywords: [
                    "peralatan"
                ]
            },
            {
                text: "Pendapatan",
                points: 15,
                keywords: [
                    "pendapatan"
                ]
            },
            {
                text: "Beban",
                points: 10,
                keywords: [
                    "beban"
                ]
            }
        ],

        optional: [
            "utang",
            "hutang",
            "modal",
            "ekuitas",
            "prive"
        ]
    },


    {
        question:
            "Sebutkan tahapan dalam siklus akuntansi!",

        answers: [
            {
                text: "Transaksi",
                points: 30,
                keywords: [
                    "transaksi"
                ]
            },
            {
                text: "Jurnal",
                points: 25,
                keywords: [
                    "jurnal",
                    "penjurnalan"
                ]
            },
            {
                text: "Posting",
                points: 20,
                keywords: [
                    "posting",
                    "buku besar"
                ]
            },
            {
                text: "Neraca",
                points: 15,
                keywords: [
                    "neraca",
                    "neraca saldo"
                ]
            },
            {
                text: "Laporan",
                points: 10,
                keywords: [
                    "laporan",
                    "laporan keuangan"
                ]
            }
        ],

        optional: [
            "penyesuaian",
            "jurnal penyesuaian",
            "penutupan",
            "jurnal penutup",
            "pengikhtisaran"
        ]
    }

];


/* =====================================================
   VARIABEL GAME
===================================================== */

let currentQuestion = 0;

let totalScore = 0;

let roundScore = 0;

let revealed = [];

let optionalRevealed = [];


/* =====================================================
   ELEMENT HTML
===================================================== */

const menuScreen =
    document.getElementById(
        "menuScreen"
    );

const gameScreen =
    document.getElementById(
        "gameScreen"
    );

const questionListScreen =
    document.getElementById(
        "questionListScreen"
    );

const questionText =
    document.getElementById(
        "questionText"
    );

const answerBoard =
    document.getElementById(
        "answerBoard"
    );

const optionalBoard =
    document.getElementById(
        "optionalBoard"
    );

const revealButtons =
    document.getElementById(
        "revealButtons"
    );

const scoreElement =
    document.getElementById(
        "score"
    );

const roundNumberElement =
    document.getElementById(
        "roundNumber"
    );

const studentAnswer =
    document.getElementById(
        "studentAnswer"
    );

const wrongModal =
    document.getElementById(
        "wrongModal"
    );

const completeModal =
    document.getElementById(
        "completeModal"
    );

const wrongText =
    document.getElementById(
        "wrongText"
    );

const roundScoreElement =
    document.getElementById(
        "roundScore"
    );

const answerModalContent =
    document.getElementById(
        "answerModalContent"
    );

const answerModalIcon =
    document.getElementById(
        "answerModalIcon"
    );

const answerModalTitle =
    document.getElementById(
        "answerModalTitle"
    );


/* =====================================================
   MULAI GAME
===================================================== */

function startGame() {

    currentQuestion = 0;

    totalScore = 0;

    roundScore = 0;

    updateScore();

    showScreen(gameScreen);

    loadQuestion();

}


/* =====================================================
   LOAD QUESTION
===================================================== */

function loadQuestion() {

    const question =
        questions[currentQuestion];


    roundNumberElement.textContent =
        currentQuestion + 1;


    questionText.textContent =
        question.question;


    roundScore = 0;


    revealed =
        new Array(
            question.answers.length
        ).fill(false);


    optionalRevealed =
        new Array(
            question.optional.length
        ).fill(false);


    renderAnswers();

    renderOptionalAnswers();

    renderRevealButtons();


    studentAnswer.value = "";

    studentAnswer.focus();

}


/* =====================================================
   RENDER JAWABAN UTAMA
===================================================== */

function renderAnswers() {

    answerBoard.innerHTML = "";


    const question =
        questions[currentQuestion];


    question.answers.forEach(
        (answer, index) => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "answer-card";


            card.id =
                `answer-${index}`;


            card.innerHTML = `

                <div class="answer-number">

                    ${String(index + 1)
                        .padStart(2, "0")}

                </div>

                <div class="answer-hidden">

                    ?

                </div>

                <div class="answer-points">

                    ${answer.points}

                </div>

            `;


            answerBoard.appendChild(card);

        }
    );

}


/* =====================================================
   RENDER JAWABAN OPSIONAL
===================================================== */

function renderOptionalAnswers() {

    optionalBoard.innerHTML = "";


    const question =
        questions[currentQuestion];


    question.optional.forEach(
        (answer, index) => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "optional-card";


            card.id =
                `optional-${index}`;


            card.innerHTML = `

                <div class="optional-hidden">

                    ?

                </div>

            `;


            optionalBoard.appendChild(card);

        }
    );

}


/* =====================================================
   REVEAL BUTTONS
===================================================== */

function renderRevealButtons() {

    revealButtons.innerHTML = "";


    const question =
        questions[currentQuestion];


    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "btn reveal-btn";


            button.textContent =
                `REVEAL ${index + 1}`;


            button.onclick =
                function () {

                    revealAnswer(index);

                };


            if (revealed[index]) {

                button.disabled = true;

            }


            revealButtons.appendChild(
                button
            );

        }
    );

}


/* =====================================================
   REVEAL JAWABAN UTAMA
===================================================== */

function revealAnswer(index) {

    if (revealed[index]) {

        return;

    }


    const question =
        questions[currentQuestion];


    const answer =
        question.answers[index];


    revealed[index] = true;


    const card =
        document.getElementById(
            `answer-${index}`
        );


    card.classList.add(
        "revealed"
    );


    card.innerHTML = `

        <div class="answer-number">

            ${String(index + 1)
                .padStart(2, "0")}

        </div>

        <div class="answer-text">

            ${answer.text}

        </div>

        <div class="answer-points">

            ${answer.points}

        </div>

    `;


    roundScore +=
        answer.points;


    totalScore +=
        answer.points;


    updateScore();

    renderRevealButtons();

    checkRoundComplete();

}


/* =====================================================
   REVEAL JAWABAN OPSIONAL
===================================================== */

function revealOptional(index) {

    if (
        optionalRevealed[index]
    ) {

        return;

    }


    const question =
        questions[currentQuestion];


    const answer =
        question.optional[index];


    optionalRevealed[index] = true;


    const card =
        document.getElementById(
            `optional-${index}`
        );


    card.classList.add(
        "revealed"
    );


    card.innerHTML = `

        <div>
            ${answer}
        </div>

    `;

}


/* =====================================================
   NORMALISASI TEKS
===================================================== */

function normalizeText(text) {

    return text
        .toLowerCase()
        .trim()
        .replace(/[.,!?]/g, "")
        .replace(/\s+/g, " ");

}


/* =====================================================
   CEK KECOCOKAN
===================================================== */

function matchesKeyword(
    userAnswer,
    keyword
) {

    const user =
        normalizeText(
            userAnswer
        );


    const key =
        normalizeText(
            keyword
        );


    if (
        user === key
    ) {

        return true;

    }


    /*
       Contoh:

       Murid:
       "beban gaji"

       Keyword:
       "gaji"

       Tetap dianggap cocok.
    */

    const userWords =
        user.split(" ");


    const keyWords =
        key.split(" ");


    return keyWords.every(
        word =>
            userWords.includes(word)
    );

}


/* =====================================================
   CARI JAWABAN
===================================================== */

function findAnswer() {

    const userAnswer =
        normalizeText(
            studentAnswer.value
        );


    const question =
        questions[currentQuestion];


    let matches = [];


    /* ==============================================
       CARI JAWABAN UTAMA
    ============================================== */

    question.answers.forEach(
        (answer, index) => {

            if (revealed[index]) {

                return;

            }


            answer.keywords.forEach(
                keyword => {

                    if (
                        matchesKeyword(
                            userAnswer,
                            keyword
                        )
                    ) {

                        matches.push({

                            type: "main",

                            index: index,

                            keyword:
                                keyword,

                            length:
                                keyword.length

                        });

                    }

                }
            );

        }
    );


    /* ==============================================
       CARI JAWABAN OPSIONAL
    ============================================== */

    question.optional.forEach(
        (answer, index) => {

            if (
                optionalRevealed[index]
            ) {

                return;

            }


            if (
                matchesKeyword(
                    userAnswer,
                    answer
                )
            ) {

                matches.push({

                    type: "optional",

                    index: index,

                    keyword: answer,

                    length: answer.length

                });

            }

        }
    );


    /*
       Kalau ada beberapa kemungkinan,
       ambil yang paling spesifik/panjang.
    */

    matches.sort(
        (a, b) =>
            b.length - a.length
    );


    return matches[0] || null;

}


/* =====================================================
   CEK JAWABAN MURID
===================================================== */

function checkAnswer() {

    const rawAnswer =
        studentAnswer.value.trim();


    if (!rawAnswer) {

        studentAnswer.focus();

        return;

    }


    const result =
        findAnswer();


    /* ==============================================
       JAWABAN UTAMA
    ============================================== */

    if (
        result &&
        result.type === "main"
    ) {

        revealAnswer(
            result.index
        );


        studentAnswer.value = "";

        studentAnswer.focus();

        return;

    }


    /* ==============================================
       JAWABAN OPSIONAL
    ============================================== */

    if (
        result &&
        result.type === "optional"
    ) {

        revealOptional(
            result.index
        );


        showOptionalMessage(
            rawAnswer
        );


        studentAnswer.value = "";

        return;

    }


    /* ==============================================
       JAWABAN SALAH
    ============================================== */

    showWrongMessage(
        rawAnswer
    );


    studentAnswer.value = "";

}


/* =====================================================
   TAMPILKAN PESAN OPSIONAL
===================================================== */

function showOptionalMessage(
    answer
) {

    answerModalContent.classList.remove(
        "wrong-modal"
    );


    answerModalContent.style.border =
        "2px solid #ffd54a";


    answerModalIcon.textContent =
        "✓";


    answerModalIcon.style.background =
        "#514419";


    answerModalIcon.style.color =
        "#ffd54a";


    answerModalTitle.textContent =
        "JAWABAN BENAR!";


    answerModalTitle.style.color =
        "#ffd54a";


    wrongText.textContent =
        `"${answer}" adalah jawaban yang benar, tetapi termasuk jawaban opsional. +0 poin.`;


    wrongModal.classList.add(
        "show"
    );

}


/* =====================================================
   TAMPILKAN PESAN SALAH
===================================================== */

function showWrongMessage(
    answer
) {

    answerModalContent.classList.add(
        "wrong-modal"
    );


    answerModalContent.style.border =
        "";


    answerModalIcon.textContent =
        "✕";


    answerModalIcon.style.background =
        "";


    answerModalIcon.style.color =
        "";


    answerModalTitle.textContent =
        "BELUM DITEMUKAN!";


    answerModalTitle.style.color =
        "";


    wrongText.textContent =
        `"${answer}" belum ditemukan dalam hasil survei. Coba jawaban lain!`;


    wrongModal.classList.add(
        "show"
    );

}


/* =====================================================
   TUTUP MODAL
===================================================== */

function closeWrongModal() {

    wrongModal.classList.remove(
        "show"
    );


    /*
       Kembalikan tampilan ke mode salah
       untuk pengecekan berikutnya.
    */

    answerModalContent.classList.add(
        "wrong-modal"
    );


    answerModalContent.style.border =
        "";


    answerModalIcon.textContent =
        "✕";


    answerModalIcon.style.background =
        "";


    answerModalIcon.style.color =
        "";


    answerModalTitle.textContent =
        "BELUM DITEMUKAN!";


    answerModalTitle.style.color =
        "";


    studentAnswer.focus();

}


/* =====================================================
   CEK SEMUA JAWABAN UTAMA
===================================================== */

function checkRoundComplete() {

    const selesai =
        revealed.every(
            value =>
                value === true
        );


    if (selesai) {

        roundScoreElement.textContent =
            roundScore;


        setTimeout(
            function () {

                completeModal.classList.add(
                    "show"
                );

            },
            600
        );

    }

}


/* =====================================================
   TUTUP MODAL RONDE
===================================================== */

function closeCompleteModal() {

    completeModal.classList.remove(
        "show"
    );


    studentAnswer.focus();

}


/* =====================================================
   RONDE BERIKUTNYA
===================================================== */

function nextRound() {

    if (
        currentQuestion <
        questions.length - 1
    ) {

        currentQuestion++;

        loadQuestion();

    } else {

        showFinalScore();

    }

}


/* =====================================================
   RESET RONDE
===================================================== */

function resetRound() {

    const yakin =
        confirm(
            "Reset ronde ini?"
        );


    if (!yakin) {

        return;

    }


    /*
       Hapus poin ronde ini
       dari skor total.
    */

    totalScore -=
        roundScore;


    if (totalScore < 0) {

        totalScore = 0;

    }


    loadQuestion();

    updateScore();

}


/* =====================================================
   UPDATE SKOR
===================================================== */

function updateScore() {

    scoreElement.textContent =
        totalScore.toLocaleString(
            "id-ID"
        );

}


/* =====================================================
   SKOR AKHIR
===================================================== */

function showFinalScore() {

    alert(

        "🎉 PERMAINAN SELESAI!\n\n" +

        "SKOR AKHIR KELAS\n\n" +

        totalScore.toLocaleString(
            "id-ID"
        ) +

        " POIN\n\n" +

        "🏆 HEBAT!"

    );

}


/* =====================================================
   GANTI SCREEN
===================================================== */

function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach(
            item => {

                item.classList.remove(
                    "active"
                );

            }
        );


    screen.classList.add(
        "active"
    );

}


/* =====================================================
   DAFTAR SOAL
===================================================== */

function showQuestionList() {

    showScreen(
        questionListScreen
    );


    renderQuestionList();

}


/* =====================================================
   RENDER DAFTAR SOAL
===================================================== */

function renderQuestionList() {

    const container =
        document.getElementById(
            "questionList"
        );


    container.innerHTML = "";


    questions.forEach(
        (question, index) => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "question-item";


            let mainHTML = "";


            question.answers.forEach(
                answer => {

                    mainHTML += `

                        <li>

                            ${answer.text}

                            —

                            <span class="points">

                                ${answer.points}
                                poin

                            </span>

                        </li>

                    `;

                }
            );


            let optionalHTML = "";


            question.optional.forEach(
                answer => {

                    optionalHTML += `

                        <li>
                            ${answer}
                        </li>

                    `;

                }
            );


            item.innerHTML = `

                <h3>

                    Ronde ${index + 1}:
                    ${question.question}

                </h3>


                <strong>
                    Jawaban utama:
                </strong>

                <ol>

                    ${mainHTML}

                </ol>


                <strong
                    style="
                        color:#ffd54a;
                        display:block;
                        margin-top:10px;
                    "
                >

                    Jawaban opsional:

                </strong>


                <ul
                    style="
                        padding-left:25px;
                        line-height:1.8;
                        color:#ffd54a;
                    "
                >

                    ${optionalHTML}

                </ul>

            `;


            container.appendChild(
                item
            );

        }
    );

}


/* =====================================================
   FULLSCREEN
===================================================== */

function toggleFullscreen() {

    if (
        !document.fullscreenElement
    ) {

        document.documentElement
            .requestFullscreen();

    } else {

        document.exitFullscreen();

    }

}


/* =====================================================
   ENTER = CEK JAWABAN
===================================================== */

studentAnswer.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter"
        ) {

            event.preventDefault();

            checkAnswer();

        }

    }
);


/* =====================================================
   KEYBOARD SHORTCUT
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        /*
           Kalau sedang mengetik,
           jangan jalankan shortcut.
        */

        if (
            document.activeElement ===
            studentAnswer
        ) {

            return;

        }


        /*
           1 - 5 = REVEAL
        */

        if (
            ["1","2","3","4","5"]
                .includes(event.key)
        ) {

            const index =
                Number(event.key) - 1;


            revealAnswer(index);

        }


        /*
           R = RESET
        */

        if (
            event.key.toLowerCase() === "r"
        ) {

            resetRound();

        }


        /*
           N = NEXT ROUND
        */

        if (
            event.key.toLowerCase() === "n"
        ) {

            nextRound();

        }


        /*
           F = FULLSCREEN
        */

        if (
            event.key.toLowerCase() === "f"
        ) {

            toggleFullscreen();

        }

    }
);