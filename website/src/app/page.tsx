import Link from 'next/link';

const Page = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Mahmut Emre Narol</h1>

      <p>Bilgisayar Mühendisi  | Yazılım Geliştirme & Web Teknolojileri</p>

      <hr />

      <h3><strong>İletişim Bilgileri:</strong></h3>
      <p><strong>Konum:</strong> Konya, Türkiye</p>
      <p><strong>E-posta:</strong> mahmutemrenarol@gmail.com</p>
      <p><strong>Telefon:</strong> 553 169 0390</p>
      <p>
        <strong>LinkedIn:</strong> 
        <a 
          href="https://linkedin.com/in/mahmut-emre-narol-206598259" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          linkedin.com/in/mahmut-emre-narol-206598259
        </a>
      </p>

      <hr />

      <h3><strong>Projeler:</strong></h3>
      <p><Link href="/projeler">Projelerimi görmek için tıklayın</Link></p> 

      <hr />

      <h3><strong>Eğitim</strong></h3>
      <p><strong>Üniversite:</strong> KTO Karatay Üniversitesi</p>
      <p><strong>Bölüm:</strong> Bilgisayar Mühendisliği (1. Sınıf) | 2023 - Devam Ediyor</p>

      <hr />

      <h3><strong>Staj & Deneyim:</strong></h3>
      <p><strong>Firma:</strong> Acunmedya Akademi – TypeScript & Next.js Programı (Stajyer)</p>
      <p><strong>Konum:</strong> İstanbul (Uzaktan) | 2025 - Devam Ediyor</p>
      <ul>
        <li>TypeScript & Next.js teknolojileri üzerine eğitim ve proje geliştirme.</li>
        <li>Web geliştirme süreçlerini öğrenme ve uygulama.</li>
        <li>Takım çalışması ve proje yönetimi deneyimi kazanma.</li>
      </ul>

      <hr />

      <h3><strong>Teknik Beceriler:</strong></h3>
      <p><strong>Programlama Dilleri:</strong> Python (Temel), TypeScript (Temel-Orta), C (Temel)</p>
      <p><strong>Kütüphaneler & Çerçeveler:</strong> Next.js</p>
      <p><strong>Araçlar & Teknolojiler:</strong> Visual Studio, Git</p>
      <p><strong>Yetkinlikler:</strong> Algoritma ve problem çözme, analitik düşünme, takım çalışması</p>

      <hr />

      <h3><strong>Dil Becerileri:</strong></h3>
      <p><strong>Türkçe:</strong> Ana dil</p>
      <p><strong>İngilizce:</strong> İleri seviye (Hazırlık eğitimi tamamlandı)</p>
    </div>
  );
};

export default Page;
