const courses = [
  {
    name: 'Introduction React',
    id: 'introduction-react',
    learnedPoints: [
      {
        title: 'React',
        description: 'Library javascript untuk membuat user interface (UI) yang interaktif dan cepat pada web maupun mobile. Alasan menggunakan react yaitu Declarative : berfokus pada hal yang ingin kita capai, Component Based : tiap komponen punya tugas nya masing - masing, Learn Once, Write Anywhere : belajar sekali, tulis dimana saja',
      },
      {
        title: 'DOM',
        description: 'DOM manipulation adalah kunci dari web yang modern dan interaktif',
      },
      {
        title: 'Virtual DOM',
        description: 'Representasi dari UI berbentuk javascript object yang disimpan pada memori.',
      },
      {
        title: 'Tools',
        description: 'Browser (Google Chrome), Text Editor / IDE: Digunakan untuk membuat serta mengubah code pada aplikasi yang kita kembangkan (VS code), Command Line Shell: Sangat membantu bila kamu familiar dengan command-line shell. Pada windows, kita dapat menggunakan cmd & power shell. Kamu dapat menggunakan terminal window jika kamu menggunakan macOS atau linux.',
      },
    ],
    tasks: [
      {
        title: 'Tampilan Home',
        description: 'Pada task ini, membuat tampilan home dengan react.',
      },
      {
        title: 'Tampilan Contact',
        description: 'Pada task ini, membuat tampilan Contact dengan react.',
      },
    ],
    links: [
      {
        url: 'https://github.com/sintatrisnajayanti',
        name: 'Github',
      },
    ],
    screenshots: [
      '/images/Home.jpg',
      '/images/Contact_us.jpg',
    ],
  },
  {
    name: 'React Fundamental',
    id: 'react-fundamental',
    learnedPoints: [
      {
        title: 'JSX',
        description: 'JSX merupakan singkatan dari javascript XML merupakan ekstensi dari javascript. Penggunaan JSX pada React sangat disarankan karena menggambarkan apa yang seharusnya tampak di UI. JSX digunakan karena dibuat berdasarkan fakta kalau logika rendering sangat terikat dengan logic UI lainnya seperti bagaimana event ditangani, bagaimana state berubah seiring dengan waktu, bagaimana data disiapkan untuk ditampilkan. Alih-Alih memisahkan teknologi (Separation of Tech) dengan memisahkan markup dan logika, React memisahkan kepentingan (Separation of Concerns) dengan unit coupling *yang rendah yang disebut dengan komponen.',
      },
      {
        title: 'React Component',
        description: 'React Component adalah bagian kode yang dapat digunakan kembali yang digunakan untuk menentukan tampilan, *behavior*, dan state sebagian UI. Komponen mempermudah pemecahan UI menjadi bagian tersendiri, bagian yang bisa digunakan kembali, dan berpikir tentang setiap potongan dalam isolasi. Membagi UI menjadi beberapa component adalah dengan membagi menu yang diinginkan menjadi serpihan-serpihan yaitu contoh serpihan kecilnya adalah *FilterableProductTable*,*SearchBar*, *ProductTable*, dan lain lain. Kemudian dalam membuat dan merender component terdapat beberapa langkah yang dilakukan pertama, dilakukan pemanggilan DOM. Kemudian memanggil komponen. Lalu komponen akan mengembalikan element. Terakhir React DOM dengan efisien akan memperbaharui DOM.',
      },
      {
        title: 'Komposisi Komponen dan props',
        description: 'Props merupakan singkatan dari properties membuat kita dapat memberikan argumen/data pada komponen. Props dapat membantu dalam membuat komponen menjadi lebih dinamis. Props dipindahkan ke komponen sama seperti memberikan atribut pada tag HTML. Props pada komponen bersifat read-only berarti tidak dapat diubah. Komposisi Komponen terdapat dua macam yaitu Kontaimen dan Spesialisasi.',
      },
      {
        title: 'React Lifecycle',
        description: 'Terdapat 4 Lifecycle yang umum digunakan yaitu render(),componentDidMount(),componentDidUpdate(),dan componentWillUnmount(). render() adalah fungsi yang sering dipakai, dibutuhkan pada class component. Merupakan pure function tidak boleh ada setState(). componentDidMount() dipanggil ketika komponen sudah di render untuk pertama kali juga merupakan tempat yang tepat untuk pemanggilan API dan boleh menggunakan setState(). componentDidUpdate() akan dipanggil ketika terjadi update saat props atau state mengalami perubahan. componentWillUnmount() dipanggil ketika komponen akan dihancurkan ini cocok digunakan dalam melakukan clean up actions.',
      },
      {
        title: 'Render bersyarat dan list',
        description: 'React dapat membuat komponen berbeda yang mencakup perilaku yang dibutuhkan. Lalu, kita bisa melakukan render hanya beberapa bagian saja, berdasarkan state dari aplikasi. Yang pertama adalah dengan menggunakan if, menggunakan Inline if dengan operator &&, inline if-else dengan ternary conditional operator,dan mencegah komponen untuk rendering. Selain itu, terdapat render list dan render komponen list yang digunakan untuk membangun koleksi dari beberapa elemen dan menyertakannya dalam JSX dengan menggunakan tanda kurung kurawal {}. Kemudian terdapat key, key digunakan dalam membantu react untuk mengidentifikasi item mana yang telah diubah, ditambahkan atau dihilangkan. Terdapat 2 macam membangun key. pertama menggunakan indeks sebagai key dan menanamkan map() pada JSX.',
      },
      {
        title: 'Struktur Direktori',
        description: 'Terdapat 3 cara mengatur direktori react dengan efisien yaitu mengelompokan berdasarkan fitur atau rute, pengelompokan berdasarkan jenis file, hindari terlalu banyak nesting, jangan terlalu memikirkannya.',
      },
      {
        title: 'Styling',
        description: 'Terdapat beberapa cara dalam melakukan styling css pada react antara lain menggunakan class dan css dengan menggunakan class lalu menggunakan file css biasa yang kemudian ditargetkan class yang ingin di styling, styling pada atribut cara ini adalah memasukan css pada style attribut pada JSX element menggunakan cara ini tidak perlu untuk memisahkan file CSS, modul CSS dengan membuat file css satu-satu tiap class-nya yang nantinya diimport sesuai class yang distyling.',
      },
    ],
    tasks: [
      {
        title: 'todolist',
        description: 'Pada task ini telah terbuat sebuah halaman web dengan react js. pada halamannya jika pada mock datanya mempunyai boolean true maka listnya akan tercoret.',
      },
    ],
    links: [
      {
        url: 'https://github.com/sintatrisnajayanti',
        name: 'Github',
      },
    ],
    screenshots: [
      '/images/fundamental.jpg',
    ],
  },
  {
    name: 'React Routing',
    id: 'react-routing',
    learnedPoints: [
      {
        title: 'React Routing',
        description: 'React routing adalah sebuah modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA atau single page application. single page application merupakan salah satu jeni aplikasi website dimana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut. MPA atau multi page application yang sering disebut dengan traditional web app adalah jenis aplikasi website dimana memerlukan halaman web lain saat membuat permintaan baru. Keunggulan single page application adalah Waktu loading website jauh lebih cepat, Tidak ada query tambahan ke server, Front-end yang cepat dan responsif, Meningkatkan pengalaman pengguna (user experience) sedangkan keunggulan dari multi page application adalah SEO website akan lebih mudah dioptimasi, Memudahkanmu untuk mengubah halaman tertentu untuk setiap kebutuhan yang berbeda, Menggunakan tools analisis seperti Google Analytics yang dapat terintegrasi langsung dengan website. Lalu kekurangan yang dimiliki dari SPA adalah  Tidak bagus dalam hal SEO, Berat saat di-load/buka pertama kali, Kurang aman dibanding dengan Website biasa, Masalah kompatibilitas browser. lalu kekurangan dari MPA adalah  Kecepatan download website jauh lebih lama jika dibandingkan dengan single page application, Kamu perlu mengintegrasikan antara front-end dan back-end, Lebih sering membutuhkan maintenance dan update, Mungkin akan lebih sering menemukan masalah performa pada website',
      },
      {
        title: 'URL Parameter',
        description: 'Parameter URL adalah suatu parameter yang nilainya ditetapkan secara dinamis di URL halaman. Hal ini memungkinkan rute untuk merender komponen yang sama saat meneruskan komponen tersebut ke bagian dinamis dari URL, sehingga dapat mengubah datanya berdasarkan parameter. adapun kegunaan url parameter adalah untuk mengatur paginasi, penyortiran dan penyaringan, pencarian, menggambarkan.',
      },
      {
        title: 'Hook routing',
        description: 'Dalam hook routing react terdapat bagian bagian yang didalamnya berisi (useHistory, useLocation, useParams, useRouteMatch). useHistory digunakan untuk memberi kita akses ke instance riwayat yang dapat Anda gunakan untuk bernavigasi. Contoh: length, go, goBack, goForward, Push useParams digunakan untuk mengembalikan objek pasangan kunci/nilai parameter URL.',
      },
    ],
    tasks: [
      {
        title: 'Tampilan Routing',
        description: 'Mengerjakan tugas sebelumnya dengan menambahkan beberapa kriteria ',
      },
    ],
    links: [
      {
        url: 'https://github.com/sintatrisnajayanti',
        name: 'Github',
      },
    ],
    screenshots: [
      '/images/aboutapp.jpg',
      '/images/aboutauthor.jpg',
      '/images/hometodo.jpg',
    ],
  },
  {
    name: 'Event Handling',
    id: 'event-handling',
    learnedPoints: [
      {
        title: 'State',
        description: 'State adalah data private sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa diakses dari component lain. Pada state, data yang bisa dimodifikasi menggunakan setState, setiap terjadi modifikasi akan terjadi render ulang, bersifat Asynchronous, dipakai dalam class. ',
      },
      {
        title: 'Props vs State',
        description: 'Props bisa di function dan classs, read only, kegunaan seperti variable turunan dari component parent. State hanya bisa di class, bisa di modifikasi, variable dari component tersebut.',
      },
      {
        title: 'Stateful dan Stateless Component',
        description: 'Stateful component adalah memiliki state. Component ini dibuat dengan class. Kelebihan dari class component adalah memiliki lifecycle. Stateless Component adalah tidak memiliki state hanya prop. Umumnya component ini diuat dengan function karena codenya lebih ringkas.',
      },
      {
        title: 'Event Handling',
        description: 'Handling Event adalah suatu metode untuk menangani sebuah event atau aksi yang diberikan pengguna kepada suatu komponen. Event adalah suatu peristiwa yang dipicu oleh pengguna pada suatu komponen misalnya tombol ditekan.',
      },
    ],
    tasks: [
      {
        title: 'Membuat daftar kegiatan dengan Event Handling',
        description: 'Pada task ini, membuat daftar kegiatan yang dapat ditambahkan menggunakan inputan, Kemudian terdapat checklist pada setiap kegiatan pekerjaan, dapat mencentang checklist dan tombol hapus',
      },
    ],
    links: [
      {
        url: 'https://github.com/sintatrisnajayanti',
        name: 'Github',
      },
    ],
    screenshots: [
      '/images/event.jpg',
    ],
  },
  {
    name: 'React Hook',
    id: 'react-hook',
    learnedPoints: [
      {
        title: 'React Hooks',
        description: 'Hooks merupakan fitur baru di Reacct 16.8. Hooks dapat menggunakan state dan fitur React yang lain tanpa perlu menulis sebuah kelas.',
      },
      {
        title: 'Motivasi',
        description: 'Kesulitan untuk menggunakan kembali stateful logic antar komponen, komponen kompleks menjadi sulit untuk dimengerti, kelas membingungkan manusia dan mesin',
      },
      {
        title: 'Implementasi useState & useEffect di Component',
        description: 'useState: Di dalam sebuah function component, kita tidak memiliki this, jadi kita tidak bisa menulis atau membaca this.state. Sebagai gantinya, kita dapat memanggil Hook useState secara langsung di dalam komponen kita. useEffect: Effect Hook memungkinkan Anda melakukan efek samping (side effects) didalam function component: Pengambilan data, pengaturan berlangganan (subscription) , dan perubahan manual DOM di dalam komponen React adalah beberapa contoh dari efek samping. Apakah Anda terbiasa menyebut memanggil operasi ini dengan sebutan efek samping (atau hanya “efek (effects)”) atau tidak, Anda mungkin pernah melakukannya di dalam komponen Anda sebelumnya. Jika Anda familiar dengan React class lifecycle methods, Anda dapat menganggap Hook useEffect sebagai componentDidMount, componentDidUpdate, dan componentWillUnmount yang disatukan.',
      },
      {
        title: ' Custom Hooks',
        description: 'Custom hooks memungkinkan kita mengekstrak komponen logika ke fungsi yang dapat digunakan lagi.',
      },
    ],
    tasks: [
      {
        title: 'Tugas React Hooks',
        description: 'Pada task ini, mengubah class component pada assignment sebelumnya menjadi Function Component',
      },
    ],
    links: [
      {
        url: 'https://github.com/sintatrisnajayanti',
        name: 'Github',
      },
    ],
    screenshots: [
      '/images/hook.jpg',
    ],
  },
  {
    name: 'React Form',
    id: 'react-form',
    learnedPoints: [
      {
        title: 'Basic Form',
        description: 'Form merupakan salah satu hal krusial dalam pengembangan aplikasi website. Form dapat digunakan untuk menghandle inputan dari user. Form banyak kita jumpai saat login, mendaftarkan sesuatu, memberikan feedback, mengisi data dan masih banyak lainnya. Macam- macam form yang ada seperti Elemen input, Elemen textarea, Elemen select , dan masih banyak lagi.',
      },
      {
        title: 'Uncontrolled vs Controlled Component',
        description: 'Form controlled dan uncontrolled memiliki kelebihannya sendiri. Kita perlu mengevaluasi situasi kita secara spesifik dan memilih pendekatan apa yang cocok untuk kondisi kita. Jika formulir sangat sederhana dalam hal umpan balik UI, uncontrolled dengan refs sepenuhnya baik-baik saja. Kita tidak perlu mendengarkan apa yang dikatakan berbagai artikel bahwa uncontrolled itu "buruk". Lagipula kita selalu dapat bermigrasi ke controlled input.',
      },
      {
        title: 'Basic Validation',
        description: 'Pada dasarnya, ada 3 alasan mengapa validasi form diperlukan : 1. Mencari input data yang benar dan sesuai format. Sebuah web/aplikasi tidak dapat berjalan dengan benar, jika data yang diolah tidak sesuai dengan kebutuhan aplikasi, 2. Melindungi akun pengguna. Misalnya, membuat pengguna untuk memasukkan data password yang aman, 3. Melindungi sistem/aplikasi. Validasi form yang kuat dapat meminimalisir perilaku pengguna yang ingin meretas sistem/aplikasi.',
      },
    ],
    tasks: [
      {
        title: 'Membuat Halaman Form',
        description: 'Pada task ini diminta untuk membuat halaman form dengan react.',
      },
    ],
    links: [
      {
        url: 'https://github.com/sintatrisnajayanti',
        name: 'Github',
      },
    ],
    screenshots: [
      '/images/form.jpg',
    ],
  },
  {
    name: 'Global State Management and Data fetching',
    id: 'global-state-and-data-fetching',
    learnedPoints: [
      {
        title: 'Global State Management',
        description: 'Redux adalah library untuk manajemen state global, Redux menggunakan struktur "one-way data flow", Redux menggunakan beberapa tipe code ',
      },
      {
        title: 'Redux Thunk',
        description: 'Thunk Middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action. Digunakan untuk menghandle side effect logic seperti logic synchronous kompleks yang perlu mengakses store dan juga logic async seperti request data',
      },
      {
        title: 'Data Fetching',
        description: 'Cara fetching data pada react: 1. Fetch API, 2. Axios, 3. React Query Library',
      },
    ],
    tasks: [
      {
        title: 'Membuat tampilan react redux-persist',
        description: 'Pada task ini, penggunaan react react redux-persist.',
      },
      {
        title: 'Hasil kode penggunaan react react redux-persist',
      },
    ],
    links: [
      {
        url: 'https://github.com/sintatrisnajayanti',
        name: 'Github',
      },
    ],
    screenshots: [
      '/images/reduxhasil.jpg',
      '/images/penggunaanredux.jpg',
    ],
  },
  {
    name: 'Testing',
    id: 'testing',
    learnedPoints: [
      {
        title: 'Testing',
        description: 'Testing adalah proses memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita.',
      },
      {
        title: 'Manfaat Testing',
        description: 'Manfaat dari testing ini adalah sebagai berikut: untuk mengurangi bug dalam sebuah aplikasi (lebih untuk mencegah beberapa hal yang berpotensi menjadi bug), ketika aplikasi kita mempunyai coverage yang baik (mayoritas codebase tercover oleh test).',
      },
      {
        title: 'Kategori Testing',
        description: 'Rendering component tress: Di dalam environment tes yang sudah disederhanakan dan tegaskan pada keluarannya, menjalankan aplikasi lengkap: Di dalam environment peramban (browser) asli. Ini dikenal sebagai tes "end-to-end". ',
      },
    ],
    tasks: [
      {
        title: 'Membuat file Testing',
        description: 'Pada task ini, disediakan kode yang digunakan dalam pembuatan Testing.',
      },
    ],
    links: [
      {
        url: 'https://github.com/sintatrisnajayanti',
        name: 'Github',
      },
    ],
    screenshots: [
      '/images/testing.jpg',
    ],
  },
];

export default courses;
