// Shared data for figures/heroes
export const figures = [
    {
        id: "i-gusti-ketut-jelantik",
        name: "I Gusti Ketut Jelantik",
        role: "Patih Agung Kerajaan Buleleng",
        desc: "Pemimpin Perang Jagaraga yang menolak tunduk pada aturan kolonial.",
        image: "/images/tokoh/jelantik.png",
        fullBio: `I Gusti Ketut Jelantik adalah seorang Patih Agung dari Kerajaan Buleleng yang memimpin perlawanan terhadap kolonialisme Belanda pada pertengahan abad ke-19.

Beliau terkenal karena keberaniannya dalam memimpin Perang Jagaraga (1849), di mana pasukan Bali berhasil memukul mundur ekspedisi militer Belanda pertama. Namun, dalam serangan kedua yang lebih besar, Benteng Jagaraga akhirnya jatuh.

Semangat perlawanannya menjadi inspirasi bagi generasi pejuang Bali selanjutnya, dan namanya diabadikan sebagai salah satu pahlawan nasional Indonesia.`,
        battles: ["Perang Jagaraga (1849)", "Pertahanan Benteng Jagaraga"],
        era: "1800-1849"
    },
    {
        id: "i-gusti-ngurah-rai",
        name: "I Gusti Ngurah Rai",
        role: "Komandan Ciung Wanara",
        desc: "Memimpin Puputan Margarana demi mempertahankan kemerdekaan RI.",
        image: "/images/tokoh/ngurah-rai.png",
        fullBio: `I Gusti Ngurah Rai adalah pahlawan nasional Indonesia yang memimpin pasukan Ciung Wanara dalam pertempuran melawan Belanda pasca kemerdekaan Indonesia.

Pada tanggal 20 November 1946, beliau memimpin Puputan Margarana, sebuah pertempuran habis-habisan melawan pasukan NICA (Netherlands Indies Civil Administration). Dalam pertempuran tersebut, beliau gugur bersama 94 prajuritnya.

Bandara internasional di Bali dinamai Ngurah Rai untuk menghormati pengorbanannya. Beliau dianugerahi gelar Pahlawan Nasional Indonesia.`,
        battles: ["Puputan Margarana (1946)", "Pertempuran Tanah Aron"],
        era: "1917-1946"
    },
    {
        id: "ida-cokorda-pemecutan-ix",
        name: "Ida Cokorda Pemecutan IX",
        role: "Raja Badung",
        desc: "Memilih jalan puputan bersama rakyatnya saat Belanda menyerang Denpasar.",
        image: "/images/tokoh/pemecutan.png",
        fullBio: `Ida Cokorda Pemecutan IX adalah Raja Badung yang memimpin Puputan Badung pada tanggal 20 September 1906.

Ketika pasukan Belanda menyerang Denpasar, beliau menolak untuk menyerah. Bersama keluarga kerajaan dan ratusan pengikutnya, Raja memilih jalan puputan - berperang hingga titik darah penghabisan daripada hidup dalam penjajahan.

Peristiwa tragis ini menjadi salah satu momen paling menggugah dalam sejarah Bali, menunjukkan betapa tingginya harga diri dan kehormatan bagi masyarakat Bali.`,
        battles: ["Puputan Badung (1906)"],
        era: "1850-1906"
    }
];

export type Figure = typeof figures[0];
