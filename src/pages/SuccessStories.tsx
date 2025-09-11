import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/components/LanguageProvider';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { QuoteDialog } from '@/components/QuoteDialog';
import { Award, Users, MapPin, Calendar, TrendingUp, Target, CheckCircle, Star, Building, Globe, Heart, Lightbulb } from 'lucide-react';
import heroImage from '@/assets/hero-morocco-mice.jpg';
import successMarrakechImage from '@/assets/success-marrakech.jpg';
import successSaharaImage from '@/assets/success-sahara-retreat.jpg';
import successAgadirTeamImage from '@/assets/success-agadir-team.jpg';
import successCasablancaImage from '@/assets/success-casablanca-conference.jpg';
import successFesImage from '@/assets/success-fes-cultural.jpg';
import dinnerImage from '@/assets/agadir-corporate-dinner.jpg';

const SuccessStories: React.FC = () => {
  const { t, language } = useLanguage();

  const successStories = [
    {
      id: 'total-energies-marrakech',
      client: 'Total Energies',
      industry: language === 'fr' ? 'Énergie & Pétrole' : language === 'es' ? 'Energía y Petróleo' : language === 'ar' ? 'الطاقة والبترول' : 'Energy & Oil',
      eventType: language === 'fr' ? 'Convention Annuelle' : language === 'es' ? 'Convención Anual' : language === 'ar' ? 'المؤتمر السنوي' : 'Annual Convention',
      location: 'Marrakech',
      participants: 350,
      duration: '4 days',
      budget: '€480,000',
      year: '2024',
      image: successMarrakechImage,
      challenge: language === 'fr' ? 'Organiser la convention annuelle de Total Energies pour 350 dirigeants internationaux avec des objectifs ambitieux de networking et présentation des résultats financiers.' : language === 'es' ? 'Organizar la convención anual de Total Energies para 350 ejecutivos internacionales con objetivos ambiciosos de networking y presentación de resultados financieros.' : language === 'ar' ? 'تنظيم المؤتمر السنوي لتوتال إنرجيز لـ 350 مدير دولي مع أهداف طموحة للتواصل وعرض النتائج المالية.' : 'Organize Total Energies annual convention for 350 international executives with ambitious networking and financial results presentation objectives.',
      solution: language === 'fr' ? 'Événement de 4 jours au Palais des Congrès de Marrakech avec sessions plénières, ateliers sectoriels, gala de gala dans un palais privé et activités team building dans l\'Atlas.' : language === 'es' ? 'Evento de 4 días en el Palacio de Congresos de Marrakech con sesiones plenarias, talleres sectoriales, cena de gala en palacio privado y actividades de team building en el Atlas.' : language === 'ar' ? 'فعالية لمدة 4 أيام في قصر المؤتمرات في مراكش مع جلسات عامة وورش قطاعية وعشاء احتفالي في قصر خاص وأنشطة بناء الفريق في الأطلس.' : '4-day event at Marrakech Congress Palace with plenary sessions, sectoral workshops, gala dinner in private palace and Atlas team building activities.',
      results: [
        { metric: language === 'fr' ? 'Satisfaction' : language === 'es' ? 'Satisfacción' : language === 'ar' ? 'الرضا' : 'Satisfaction', value: '98%', icon: Star },
        { metric: language === 'fr' ? 'Nouvelles Connexions' : language === 'es' ? 'Nuevas Conexiones' : language === 'ar' ? 'اتصالات جديدة' : 'New Connections', value: '+2,400', icon: Users },
        { metric: language === 'fr' ? 'ROI Mesuré' : language === 'es' ? 'ROI Medido' : language === 'ar' ? 'عائد الاستثمار المقاس' : 'Measured ROI', value: '340%', icon: TrendingUp },
        { metric: language === 'fr' ? 'Contrats Signés' : language === 'es' ? 'Contratos Firmados' : language === 'ar' ? 'عقود موقعة' : 'Contracts Signed', value: '€12M', icon: Target }
      ],
      testimonial: {
        quote: language === 'fr' ? 'Organisation parfaite avec une attention aux détails remarquable. Nos 350 participants ont vécu une expérience exceptionnelle qui a renforcé notre cohésion globale.' : language === 'es' ? 'Organización perfecta con una atención al detalle notable. Nuestros 350 participantes vivieron una experiencia excepcional que reforzó nuestra cohesión global.' : language === 'ar' ? 'تنظيم مثالي مع اهتمام ملحوظ بالتفاصيل. عاش مشاركونا الـ 350 تجربة استثنائية عززت تماسكنا العالمي.' : 'Perfect organization with remarkable attention to detail. Our 350 participants experienced an exceptional event that strengthened our global cohesion.',
        author: 'Marie Dubois',
        position: language === 'fr' ? 'Directrice Événements Globaux' : language === 'es' ? 'Directora Eventos Globales' : language === 'ar' ? 'مديرة الفعاليات العالمية' : 'Global Events Director',
        company: 'Total Energies'
      },
      keyFeatures: [
        language === 'fr' ? 'Centres de congrès modernes' : language === 'es' ? 'Centros de congresos modernos' : language === 'ar' ? 'مراكز مؤتمرات حديثة' : 'Modern congress centers',
        language === 'fr' ? 'Gala dans palais historique' : language === 'es' ? 'Gala en palacio histórico' : language === 'ar' ? 'حفل في قصر تاريخي' : 'Gala in historic palace',
        language === 'fr' ? 'Activités Atlas Mountains' : language === 'es' ? 'Actividades Montañas Atlas' : language === 'ar' ? 'أنشطة جبال الأطلس' : 'Atlas Mountains activities',
        language === 'fr' ? 'Services traduction 8 langues' : language === 'es' ? 'Servicios traducción 8 idiomas' : language === 'ar' ? 'خدمات ترجمة 8 لغات' : '8-language translation services'
      ]
    },
    {
      id: 'kpmg-sahara-retreat',
      client: 'KPMG',
      industry: language === 'fr' ? 'Conseil & Audit' : language === 'es' ? 'Consultoría y Auditoría' : language === 'ar' ? 'الاستشارات والتدقيق' : 'Consulting & Audit',
      eventType: language === 'fr' ? 'Retraite Leadership' : language === 'es' ? 'Retiro de Liderazgo' : language === 'ar' ? 'خلوة القيادة' : 'Leadership Retreat',
      location: 'Sahara Desert',
      participants: 45,
      duration: '3 days',
      budget: '€85,000',
      year: '2024',
      image: successSaharaImage,
      challenge: language === 'fr' ? 'Créer une expérience transformatrice pour le comité de direction KPMG Afrique du Nord afin de redéfinir la stratégie 2025-2030 dans un cadre inspirant.' : language === 'es' ? 'Crear una experiencia transformadora para el comité directivo KPMG Norte de África para redefinir la estrategia 2025-2030 en un marco inspirador.' : language === 'ar' ? 'إنشاء تجربة تحويلية للجنة الإدارية في كي بي إم جي شمال أفريقيا لإعادة تعريف استراتيجية 2025-2030 في إطار ملهم.' : 'Create a transformative experience for KPMG North Africa executive committee to redefine 2025-2030 strategy in an inspiring setting.',
      solution: language === 'fr' ? 'Retraite exclusive dans camp de luxe du Sahara avec ateliers stratégiques, coaching individuel, expériences culturelles berbers et sessions de réflexion sous les étoiles.' : language === 'es' ? 'Retiro exclusivo en campamento de lujo del Sahara con talleres estratégicos, coaching individual, experiencias culturales bereber y sesiones de reflexión bajo las estrellas.' : language === 'ar' ? 'خلوة حصرية في مخيم فاخر في الصحراء مع ورش استراتيجية وتدريب فردي وتجارب ثقافية بربرية وجلسات تأمل تحت النجوم.' : 'Exclusive retreat in luxury Sahara camp with strategic workshops, individual coaching, Berber cultural experiences and starlight reflection sessions.',
      results: [
        { metric: language === 'fr' ? 'Clarté Stratégique' : language === 'es' ? 'Claridad Estratégica' : language === 'ar' ? 'الوضوح الاستراتيجي' : 'Strategic Clarity', value: '+85%', icon: Lightbulb },
        { metric: language === 'fr' ? 'Cohésion Équipe' : language === 'es' ? 'Cohesión del Equipo' : language === 'ar' ? 'تماسك الفريق' : 'Team Cohesion', value: '+70%', icon: Heart },
        { metric: language === 'fr' ? 'Engagement Leadership' : language === 'es' ? 'Compromiso Liderazgo' : language === 'ar' ? 'التزام القيادة' : 'Leadership Engagement', value: '100%', icon: Award },
        { metric: language === 'fr' ? 'Objectifs Définis' : language === 'es' ? 'Objetivos Definidos' : language === 'ar' ? 'أهداف محددة' : 'Defined Objectives', value: '24', icon: Target }
      ],
      testimonial: {
        quote: language === 'fr' ? 'Une expérience absolument unique qui a transformé notre vision collective. Le cadre exceptionnel du désert a libéré notre créativité et renforcé nos liens d\'équipe de manière extraordinaire.' : language === 'es' ? 'Una experiencia absolutamente única que transformó nuestra visión colectiva. El marco excepcional del desierto liberó nuestra creatividad y reforzó nuestros vínculos de equipo de manera extraordinaria.' : language === 'ar' ? 'تجربة فريدة تمامًا غيرت رؤيتنا الجماعية. الإطار الاستثنائي للصحراء حرر إبداعنا وعزز روابط فريقنا بطريقة غير عادية.' : 'An absolutely unique experience that transformed our collective vision. The exceptional desert setting unleashed our creativity and strengthened our team bonds extraordinarily.',
        author: 'Ahmed Al-Rashid',
        position: language === 'fr' ? 'Managing Partner' : language === 'es' ? 'Socio Director' : language === 'ar' ? 'الشريك الإداري' : 'Managing Partner',
        company: 'KPMG North Africa'
      },
      keyFeatures: [
        language === 'fr' ? 'Camp de luxe avec suites privées' : language === 'es' ? 'Campamento de lujo con suites privadas' : language === 'ar' ? 'مخيم فاخر مع أجنحة خاصة' : 'Luxury camp with private suites',
        language === 'fr' ? 'Facilitateurs stratégie internationaux' : language === 'es' ? 'Facilitadores estrategia internacionales' : language === 'ar' ? 'ميسرون استراتيجيون دوليون' : 'International strategy facilitators',
        language === 'fr' ? 'Expériences culturelles authentiques' : language === 'es' ? 'Experiencias culturales auténticas' : language === 'ar' ? 'تجارب ثقافية أصيلة' : 'Authentic cultural experiences',
        language === 'fr' ? 'Technology hub mobile' : language === 'es' ? 'Hub tecnológico móvil' : language === 'ar' ? 'مركز تقني متنقل' : 'Mobile technology hub'
      ]
    },
    {
      id: 'santander-agadir-teambuilding',
      client: 'Banco Santander',
      industry: language === 'fr' ? 'Services Financiers' : language === 'es' ? 'Servicios Financieros' : language === 'ar' ? 'الخدمات المالية' : 'Financial Services',
      eventType: language === 'fr' ? 'Team Building & Formation' : language === 'es' ? 'Team Building y Formación' : language === 'ar' ? 'بناء الفريق والتدريب' : 'Team Building & Training',
      location: 'Agadir',
      participants: 180,
      duration: '5 days',
      budget: '€220,000',
      year: '2024',
      image: successAgadirTeamImage,
      challenge: language === 'fr' ? 'Intégrer 180 collaborateurs de 12 filiales européennes avec des activités de team building innovantes et formation commerciale intensive pour lancement nouveaux produits.' : language === 'es' ? 'Integrar 180 colaboradores de 12 filiales europeas con actividades de team building innovadoras y formación comercial intensiva para lanzamiento de nuevos productos.' : language === 'ar' ? 'دمج 180 موظف من 12 فرع أوروبي مع أنشطة بناء الفريق المبتكرة والتدريب التجاري المكثف لإطلاق منتجات جديدة.' : 'Integrate 180 employees from 12 European branches with innovative team building activities and intensive commercial training for new product launch.',
      solution: language === 'fr' ? 'Programme intensif de 5 jours combinant formations en salle, challenges sportifs sur plage, compétitions golf, ateliers culinaires marocains et soirée gala en bord de mer.' : language === 'es' ? 'Programa intensivo de 5 días combinando formaciones en aula, desafíos deportivos en playa, competencias de golf, talleres culinarios marroquíes y cena de gala junto al mar.' : language === 'ar' ? 'برنامج مكثف لمدة 5 أيام يجمع بين التدريب في القاعة والتحديات الرياضية على الشاطئ ومسابقات الجولف وورش الطبخ المغربي وعشاء احتفالي على شاطئ البحر.' : 'Intensive 5-day program combining classroom training, beach sports challenges, golf competitions, Moroccan culinary workshops and seaside gala dinner.',
      results: [
        { metric: language === 'fr' ? 'Collaboration Inter-Filiales' : language === 'es' ? 'Colaboración Inter-Filiales' : language === 'ar' ? 'التعاون بين الفروع' : 'Inter-Branch Collaboration', value: '+65%', icon: Globe },
        { metric: language === 'fr' ? 'Connaissances Produits' : language === 'es' ? 'Conocimiento Productos' : language === 'ar' ? 'معرفة المنتجات' : 'Product Knowledge', value: '+90%', icon: CheckCircle },
        { metric: language === 'fr' ? 'Motivation Équipes' : language === 'es' ? 'Motivación Equipos' : language === 'ar' ? 'دافعية الفرق' : 'Team Motivation', value: '+75%', icon: TrendingUp },
        { metric: language === 'fr' ? 'Objectifs Ventes Atteints' : language === 'es' ? 'Objetivos Ventas Alcanzados' : language === 'ar' ? 'أهداف المبيعات المحققة' : 'Sales Targets Achieved', value: '112%', icon: Target }
      ],
      testimonial: {
        quote: language === 'fr' ? 'Programme exceptionnel qui a créé une véritable synergie entre nos équipes européennes. L\'approche innovante combinant formation et expériences marocaines a généré des résultats au-delà de nos attentes.' : language === 'es' ? 'Programa excepcional que creó una verdadera sinergia entre nuestros equipos europeos. El enfoque innovador combinando formación y experiencias marroquíes generó resultados más allá de nuestras expectativas.' : language === 'ar' ? 'برنامج استثنائي خلق تناغمًا حقيقيًا بين فرقنا الأوروبية. النهج المبتكر الذي يجمع بين التدريب والتجارب المغربية حقق نتائج تجاوزت توقعاتنا.' : 'Exceptional program that created real synergy between our European teams. The innovative approach combining training and Moroccan experiences generated results beyond our expectations.',
        author: 'Carlos Rodriguez',
        position: language === 'fr' ? 'VP Operations Europe' : language === 'es' ? 'VP Operaciones Europa' : language === 'ar' ? 'نائب رئيس العمليات أوروبا' : 'VP Operations Europe',
        company: 'Banco Santander'
      },
      keyFeatures: [
        language === 'fr' ? 'Resort 5* all-inclusive beachfront' : language === 'es' ? 'Resort 5* todo incluido frente al mar' : language === 'ar' ? 'منتجع 5 نجوم شامل كليًا على شاطئ البحر' : '5* all-inclusive beachfront resort',
        language === 'fr' ? 'Activités nautiques professionnelles' : language === 'es' ? 'Actividades náuticas profesionales' : language === 'ar' ? 'أنشطة مائية مهنية' : 'Professional water activities',
        language === 'fr' ? 'Tournoi golf 18 trous' : language === 'es' ? 'Torneo golf 18 hoyos' : language === 'ar' ? 'بطولة جولف 18 حفرة' : '18-hole golf tournament',
        language === 'fr' ? 'Ateliers gastronomie locale' : language === 'es' ? 'Talleres gastronomía local' : language === 'ar' ? 'ورش الطبخ المحلي' : 'Local gastronomy workshops'
      ]
    },
    {
      id: 'google-casablanca-conference',
      client: 'Google Cloud',
      industry: language === 'fr' ? 'Technologie & Cloud' : language === 'es' ? 'Tecnología y Nube' : language === 'ar' ? 'التكنولوجيا والحوسبة السحابية' : 'Technology & Cloud',
      eventType: language === 'fr' ? 'Conférence Tech & Innovation' : language === 'es' ? 'Conferencia Tech e Innovación' : language === 'ar' ? 'مؤتمر التقنية والابتكار' : 'Tech & Innovation Conference',
      location: 'Casablanca',
      participants: 500,
      duration: '3 days',
      budget: '€320,000',
      year: '2024',
      image: successCasablancaImage,
      challenge: language === 'fr' ? 'Organiser la première conférence Google Cloud MENA avec 500 participants, démonstrations techniques en direct et networking de haut niveau pour décideurs IT régionaux.' : language === 'es' ? 'Organizar la primera conferencia Google Cloud MENA con 500 participantes, demostraciones técnicas en vivo y networking de alto nivel para tomadores de decisiones IT regionales.' : language === 'ar' ? 'تنظيم أول مؤتمر جوجل كلاود في منطقة الشرق الأوسط وشمال أفريقيا مع 500 مشارك وعروض تقنية مباشرة وتواصل عالي المستوى لصناع القرار في تقنية المعلومات الإقليميين.' : 'Organize the first Google Cloud MENA conference with 500 participants, live technical demonstrations and high-level networking for regional IT decision makers.',
      solution: language === 'fr' ? 'Événement de 3 jours au Centre International des Congrès avec keynotes internationaux, zones démo interactives, ateliers techniques hands-on et networking premium dans rooftop panoramique.' : language === 'es' ? 'Evento de 3 días en el Centro Internacional de Congresos con keynotes internacionales, zonas demo interactivas, talleres técnicos hands-on y networking premium en azotea panorámica.' : language === 'ar' ? 'فعالية لمدة 3 أيام في المركز الدولي للمؤتمرات مع كلمات رئيسية دولية ومناطق عرض تفاعلية وورش تقنية عملية وتواصل مميز في السطح البانورامي.' : '3-day event at International Congress Center with international keynotes, interactive demo zones, hands-on technical workshops and premium rooftop networking.',
      results: [
        { metric: language === 'fr' ? 'Leads Qualifiés Générés' : language === 'es' ? 'Leads Calificados Generados' : language === 'ar' ? 'عملاء محتملون مؤهلون تم توليدهم' : 'Qualified Leads Generated', value: '1,200+', icon: Target },
        { metric: language === 'fr' ? 'Média Coverage Value' : language === 'es' ? 'Valor Cobertura Mediática' : language === 'ar' ? 'قيمة التغطية الإعلامية' : 'Media Coverage Value', value: '€2.5M', icon: TrendingUp },
        { metric: language === 'fr' ? 'Partnerships Established' : language === 'es' ? 'Asociaciones Establecidas' : language === 'ar' ? 'شراكات تم تأسيسها' : 'Partnerships Established', value: '45', icon: Users },
        { metric: language === 'fr' ? 'Demo Engagement Rate' : language === 'es' ? 'Tasa Participación Demo' : language === 'ar' ? 'معدل التفاعل مع العروض' : 'Demo Engagement Rate', value: '89%', icon: CheckCircle }
      ],
      testimonial: {
        quote: language === 'fr' ? 'Exécution impeccable pour le lancement de Google Cloud au Maroc. L\'organisation technique et logistique a permis une expérience utilisateur parfaite et des résultats business exceptionnels.' : language === 'es' ? 'Ejecución impecable para el lanzamiento de Google Cloud en Marruecos. La organización técnica y logística permitió una experiencia de usuario perfecta y resultados de negocio excepcionales.' : language === 'ar' ? 'تنفيذ لا تشوبه شائبة لإطلاق جوجل كلاود في المغرب. التنظيم التقني واللوجستي مكّن من تجربة مستخدم مثالية ونتائج تجارية استثنائية.' : 'Flawless execution for Google Cloud launch in Morocco. Technical and logistical organization enabled perfect user experience and exceptional business results.',
        author: 'Sarah Johnson',
        position: language === 'fr' ? 'Director MENA Expansion' : language === 'es' ? 'Directora Expansión MENA' : language === 'ar' ? 'مديرة التوسع في منطقة الشرق الأوسط وشمال أفريقيا' : 'Director MENA Expansion',
        company: 'Google Cloud'
      },
      keyFeatures: [
        language === 'fr' ? 'Infrastructure technique de pointe' : language === 'es' ? 'Infraestructura técnica de vanguardia' : language === 'ar' ? 'بنية تحتية تقنية متطورة' : 'Cutting-edge technical infrastructure',
        language === 'fr' ? 'Streaming live international' : language === 'es' ? 'Streaming en vivo internacional' : language === 'ar' ? 'بث مباشر دولي' : 'International live streaming',
        language === 'fr' ? 'Zones démo interactives' : language === 'es' ? 'Zonas demo interactivas' : language === 'ar' ? 'مناطق عرض تفاعلية' : 'Interactive demo zones',
        language === 'fr' ? 'App mobile événement' : language === 'es' ? 'App móvil del evento' : language === 'ar' ? 'تطبيق الجوال للفعالية' : 'Event mobile app'
      ]
    },
    {
      id: 'bmw-fes-cultural-incentive',
      client: 'BMW Group',
      industry: language === 'fr' ? 'Automobile Premium' : language === 'es' ? 'Automóvil Premium' : language === 'ar' ? 'السيارات المتميزة' : 'Premium Automotive',
      eventType: language === 'fr' ? 'Incentive Culturel Premium' : language === 'es' ? 'Incentivo Cultural Premium' : language === 'ar' ? 'حافز ثقافي متميز' : 'Premium Cultural Incentive',
      location: 'Fes',
      participants: 120,
      duration: '4 days',
      budget: '€295,000',
      year: '2024',
      image: successFesImage,
      challenge: language === 'fr' ? 'Créer un incentive premium pour les 120 meilleurs concessionnaires BMW Europe avec immersion culturelle authentique et expériences exclusives dignes de la marque.' : language === 'es' ? 'Crear un incentivo premium para los 120 mejores concesionarios BMW Europa con inmersión cultural auténtica y experiencias exclusivas dignas de la marca.' : language === 'ar' ? 'إنشاء حافز متميز لأفضل 120 وكيل بي إم دبليو في أوروبا مع انغماس ثقافي أصيل وتجارب حصرية تليق بالعلامة التجارية.' : 'Create a premium incentive for the top 120 BMW Europe dealers with authentic cultural immersion and exclusive experiences worthy of the brand.',
      solution: language === 'fr' ? 'Programme exclusif de 4 jours dans riads de luxe avec visites privées médina UNESCO, ateliers artisant marocain, dégustations gastronomiques et soirée spectaculaire dans palais royal.' : language === 'es' ? 'Programa exclusivo de 4 días en riads de lujo con visitas privadas medina UNESCO, talleres artesanos marroquíes, degustaciones gastronómicas y velada espectacular en palacio real.' : language === 'ar' ? 'برنامج حصري لمدة 4 أيام في رياضات فاخرة مع زيارات خاصة للمدينة التراثية وورش الحرفيين المغاربة وتذوق فنون الطبخ وأمسية مذهلة في القصر الملكي.' : 'Exclusive 4-day program in luxury riads with private UNESCO medina visits, Moroccan artisan workshops, gastronomic tastings and spectacular evening in royal palace.',
      results: [
        { metric: language === 'fr' ? 'Satisfaction Exceptionnelle' : language === 'es' ? 'Satisfacción Excepcional' : language === 'ar' ? 'رضا استثنائي' : 'Exceptional Satisfaction', value: '100%', icon: Star },
        { metric: language === 'fr' ? 'Motivation Commerciale' : language === 'es' ? 'Motivación Comercial' : language === 'ar' ? 'الدافعية التجارية' : 'Sales Motivation', value: '+95%', icon: TrendingUp },
        { metric: language === 'fr' ? 'Fidélité Marque' : language === 'es' ? 'Lealtad Marca' : language === 'ar' ? 'ولاء العلامة التجارية' : 'Brand Loyalty', value: '+80%', icon: Heart },
        { metric: language === 'fr' ? 'Ventes Post-Incentive' : language === 'es' ? 'Ventas Post-Incentivo' : language === 'ar' ? 'مبيعات ما بعد الحافز' : 'Post-Incentive Sales', value: '+45%', icon: Target }
      ],
      testimonial: {
        quote: language === 'fr' ? 'Un incentive d\'exception qui reflète parfaitement les valeurs de BMW. L\'immersion culturelle à Fès a créé des souvenirs indélébiles et renforcé l\'engagement de nos partenaires commerciaux.' : language === 'es' ? 'Un incentivo excepcional que refleja perfectamente los valores de BMW. La inmersión cultural en Fez creó recuerdos imborrables y reforzó el compromiso de nuestros socios comerciales.' : language === 'ar' ? 'حافز استثنائي يعكس بشكل مثالي قيم بي إم دبليو. الانغماس الثقافي في فاس خلق ذكريات لا تُمحى وعزز التزام شركائنا التجاريين.' : 'An exceptional incentive that perfectly reflects BMW values. The cultural immersion in Fez created indelible memories and strengthened our commercial partners\' commitment.',
        author: 'Klaus Mueller',
        position: language === 'fr' ? 'Director Sales Excellence Europe' : language === 'es' ? 'Director Excelencia Ventas Europa' : language === 'ar' ? 'مدير تميز المبيعات أوروبا' : 'Director Sales Excellence Europe',
        company: 'BMW Group'
      },
      keyFeatures: [
        language === 'fr' ? 'Riads authentiques 5 étoiles' : language === 'es' ? 'Riads auténticos 5 estrellas' : language === 'ar' ? 'رياضات أصيلة 5 نجوم' : 'Authentic 5-star riads',
        language === 'fr' ? 'Accès exclusif monuments' : language === 'es' ? 'Acceso exclusivo monumentos' : language === 'ar' ? 'وصول حصري للآثار' : 'Exclusive monument access',
        language === 'fr' ? 'Maîtres artisans personnels' : language === 'es' ? 'Maestros artesanos personales' : language === 'ar' ? 'أساتذة حرفيين شخصيين' : 'Personal master craftsmen',
        language === 'fr' ? 'Soirée palais royal privée' : language === 'es' ? 'Velada palacio real privada' : language === 'ar' ? 'أمسية قصر ملكي خاص' : 'Private royal palace evening'
      ]
    }
  ];

  const stats = [
    {
      number: '500+',
      label: language === 'fr' ? 'Événements Réussis' : language === 'es' ? 'Eventos Exitosos' : language === 'ar' ? 'فعاليات ناجحة' : 'Successful Events',
      icon: Award
    },
    {
      number: '98%',
      label: language === 'fr' ? 'Taux Satisfaction Client' : language === 'es' ? 'Tasa Satisfacción Cliente' : language === 'ar' ? 'معدل رضا العملاء' : 'Client Satisfaction Rate',
      icon: Star
    },
    {
      number: '150+',
      label: language === 'fr' ? 'Entreprises Fortune 500' : language === 'es' ? 'Empresas Fortune 500' : language === 'ar' ? 'شركات فورتشن 500' : 'Fortune 500 Companies',
      icon: Building
    },
    {
      number: '€50M+',
      label: language === 'fr' ? 'Budget Événements Gérés' : language === 'es' ? 'Presupuesto Eventos Gestionados' : language === 'ar' ? 'ميزانية الفعاليات المدارة' : 'Events Budget Managed',
      icon: TrendingUp
    }
  ];

  return (
    <>
      <Helmet>
        <title>{language === 'fr' ? 'Success Stories MICE Maroc - Cas Clients Total, KPMG, BMW, Google | Résultats Prouvés' : language === 'es' ? 'Casos de Éxito MICE Marruecos - Clientes Total, KPMG, BMW, Google | Resultados Probados' : language === 'ar' ? 'قصص نجاح السياحة التجارية المغرب - عملاء توتال، كي بي إم جي، بي إم دبليو، جوجل | نتائج مثبتة' : 'MICE Morocco Success Stories - Total, KPMG, BMW, Google Clients | Proven Results'}</title>
        <meta name="description" content={language === 'fr' ? 'Découvrez nos success stories MICE au Maroc: Total Energies (350 pax), KPMG Sahara retreat, Santander team building, Google Cloud conference. ROI mesurés, témoignages clients, résultats prouvés.' : language === 'es' ? 'Descubra nuestros casos de éxito MICE en Marruecos: Total Energies (350 pax), retiro KPMG Sahara, team building Santander, conferencia Google Cloud. ROI medidos, testimonios clientes, resultados probados.' : language === 'ar' ? 'اكتشف قصص نجاحنا في السياحة التجارية في المغرب: توتال إنرجيز (350 مشارك)، خلوة كي بي إم جي في الصحراء، بناء فريق سانتاندر، مؤتمر جوجل كلاود. عائد استثمار مقاس، شهادات العملاء، نتائج مثبتة.' : 'Explore our MICE success stories in Morocco: Total Energies (350 pax), KPMG Sahara retreat, Santander team building, Google Cloud conference. Measured ROI, client testimonials, proven results.'} />
        <meta name="keywords" content={language === 'fr' ? 'success stories MICE Maroc, cas clients événements Marrakech, témoignages entreprises incentive Maroc, résultats prouvés conférence Casablanca, ROI team building Agadir' : language === 'es' ? 'casos éxito MICE Marruecos, clientes eventos Marrakech, testimonios empresas incentivo Marruecos, resultados probados conferencia Casablanca, ROI team building Agadir' : language === 'ar' ? 'قصص نجاح السياحة التجارية المغرب، عملاء فعاليات مراكش، شهادات شركات حوافز المغرب، نتائج مثبتة مؤتمر الدار البيضاء' : 'MICE Morocco success stories, Marrakech events clients, Morocco incentive company testimonials, proven Casablanca conference results, Agadir team building ROI'} />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 gradient-hero opacity-80"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 text-sm font-medium">
              {language === 'fr' ? 'Témoignages & Résultats Prouvés' : language === 'es' ? 'Testimonios y Resultados Probados' : language === 'ar' ? 'شهادات ونتائج مثبتة' : 'Testimonials & Proven Results'}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
              {language === 'fr' ? 'Success Stories' : language === 'es' ? 'Casos de Éxito' : language === 'ar' ? 'قصص النجاح' : 'Success Stories'}
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              {language === 'fr' ? 'Découvrez comment nous avons transformé les objectifs de nos clients en succès mesurables à travers des événements d\'exception au Maroc.' : language === 'es' ? 'Descubra cómo hemos transformado los objetivos de nuestros clientes en éxitos medibles a través de eventos excepcionales en Marruecos.' : language === 'ar' ? 'اكتشف كيف حولنا أهداف عملائنا إلى نجاحات قابلة للقياس من خلال فعاليات استثنائية في المغرب.' : 'Discover how we have transformed our clients\' objectives into measurable successes through exceptional events in Morocco.'}
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                {language === 'fr' ? 'Nos Réalisations Remarquables' : language === 'es' ? 'Nuestros Logros Notables' : language === 'ar' ? 'إنجازاتنا الملحوظة' : 'Our Remarkable Achievements'}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {language === 'fr' ? 'Chaque projet est unique, chaque résultat est exceptionnel' : language === 'es' ? 'Cada proyecto es único, cada resultado es excepcional' : language === 'ar' ? 'كل مشروع فريد، كل نتيجة استثنائية' : 'Every project is unique, every result is exceptional'}
              </p>
            </div>

            <div className="space-y-24">
              {successStories.map((story, index) => (
                <div key={story.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-start`}>
                  {/* Image Section */}
                  <div className="flex-1">
                    <Card className="overflow-hidden shadow-elegant border-0">
                      <div className="relative h-96">
                        <img 
                          src={story.image} 
                          alt={`${story.client} ${story.eventType}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white">
                            {story.year}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="text-white">
                            <h3 className="text-2xl font-bold mb-2">{story.client}</h3>
                            <p className="text-white/90">{story.eventType}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <Badge variant="outline">{story.industry}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          {story.location}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="w-4 h-4 mr-2" />
                          {story.participants} {language === 'fr' ? 'participants' : language === 'es' ? 'participantes' : language === 'ar' ? 'مشارك' : 'participants'}
                        </div>
                      </div>

                      <h3 className="text-3xl font-serif font-bold text-foreground">
                        {story.client} - {story.eventType}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center">
                          <Target className="w-5 h-5 mr-2 text-primary" />
                          {language === 'fr' ? 'Défi' : language === 'es' ? 'Desafío' : language === 'ar' ? 'التحدي' : 'Challenge'}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">{story.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center">
                          <Lightbulb className="w-5 h-5 mr-2 text-primary" />
                          {language === 'fr' ? 'Solution' : language === 'es' ? 'Solución' : language === 'ar' ? 'الحل' : 'Solution'}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">{story.solution}</p>
                      </div>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {story.results.map((result, idx) => (
                        <Card key={idx} className="p-4 text-center border-0 bg-muted/30">
                          <result.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                          <div className="text-2xl font-bold text-primary mb-1">{result.value}</div>
                          <div className="text-xs text-muted-foreground">{result.metric}</div>
                        </Card>
                      ))}
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                        {language === 'fr' ? 'Points Clés' : language === 'es' ? 'Puntos Clave' : language === 'ar' ? 'النقاط الرئيسية' : 'Key Features'}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {story.keyFeatures.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <Card className="p-6 bg-muted/20 border-l-4 border-l-primary border-0">
                      <div className="flex items-start space-x-4">
                        <div className="flex-1">
                          <p className="text-muted-foreground italic mb-4">"{story.testimonial.quote}"</p>
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
                              <Users className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <div>
                              <div className="font-semibold text-foreground">{story.testimonial.author}</div>
                              <div className="text-sm text-muted-foreground">{story.testimonial.position}</div>
                              <div className="text-sm font-medium text-primary">{story.testimonial.company}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
              {language === 'fr' ? 'Prêt à Créer Votre Success Story ?' : language === 'es' ? '¿Listo para Crear Su Caso de Éxito?' : language === 'ar' ? 'مستعد لإنشاء قصة نجاحك؟' : 'Ready to Create Your Success Story?'}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {language === 'fr' ? 'Rejoignez plus de 150 entreprises internationales qui nous font confiance pour leurs événements au Maroc.' : language === 'es' ? 'Únase a más de 150 empresas internacionales que confían en nosotros para sus eventos en Marruecos.' : language === 'ar' ? 'انضم إلى أكثر من 150 شركة دولية تثق بنا لفعالياتها في المغرب.' : 'Join over 150 international companies who trust us for their events in Morocco.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <QuoteDialog>
                <Button variant="cta" size="lg" className="text-lg px-12 py-6">
                  {language === 'fr' ? 'Commencer Mon Projet' : language === 'es' ? 'Comenzar Mi Proyecto' : language === 'ar' ? 'ابدأ مشروعي' : 'Start My Project'}
                </Button>
              </QuoteDialog>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link to="/contact">
                  {language === 'fr' ? 'Discuter de Mon Événement' : language === 'es' ? 'Hablar de Mi Evento' : language === 'ar' ? 'مناقشة فعاليتي' : 'Discuss My Event'}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SuccessStories;