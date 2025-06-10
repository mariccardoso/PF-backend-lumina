// seed.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.post.createMany({
    data: [
        {
          title: "Beleza Natural: Menos Filtros, Mais Realidade",
          content: "A era da beleza real chegou para ficar. Cada vez mais mulheres estão abraçando suas particularidades e dizendo não aos padrões irreais impostos pelas redes sociais. O autocuidado começa com o reconhecimento de que sua pele, suas marcas e sua história contam quem você é. Priorize hábitos saudáveis, autoestima e a liberdade de se mostrar como realmente é — com confiança e autenticidade.",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOJqfFDiGX7vSDtBZN0Sw6kw8ByH-XQtdzA&s"
        },
        {
          title: "Skincare Inteligente: Rotina Simples, Resultados Poderosos",
          content: "Não é sobre ter 10 passos — é sobre ter os passos certos. Uma rotina eficiente de skincare inclui limpeza, hidratação e proteção solar. Esses três pilares, se mantidos diariamente, promovem regeneração, controle da oleosidade e luminosidade natural. O segredo está na constância e no autoconhecimento da sua pele. Skincare não é luxo — é autocuidado estratégico.",
          imageUrl: "https://oxioz.com.br/wp-content/uploads/2024/02/rotina-skincare-cuidados-com-a-pele.jpg"
        },
        {
          title: "Cuidados com a Pele no Verão: Proteja Sua Beleza",
          content: "Verão combina com sol, mas também exige atenção redobrada com a pele. Aposte em filtros solares com alto fator de proteção, reforce a hidratação e evite ácidos durante o dia. Apostar em água termal, roupas leves e chapéus pode ser um diferencial. Autocuidado sazonal é inteligência emocional e estética. Seu brilho deve vir de dentro, mas sem abrir mão da proteção.",
          imageUrl: "https://healthwire.pk/wp-content/uploads/2022/06/skin-care-tips-for-summer.jpg"
        },
        {
          title: "Hidratação Capilar: O Spa Que Seu Cabelo Merece",
          content: "Seus fios são uma extensão da sua identidade. Incorporar uma hidratação semanal com máscaras nutritivas e óleos vegetais é essencial para fios saudáveis, brilhosos e fortes. Cuidados térmicos, cronograma capilar e produtos adequados ao seu tipo de cabelo são o combo ideal para resultados profissionais em casa. Invista tempo nos seus rituais de beleza — sua autoestima agradece.",
          imageUrl: "https://blog.colombo.com.br/wp-content/uploads/2016/08/mulher-hidratando-o-cabelo-810x567.jpg"
        },
        {
          title: "Espelho, Autoconhecimento e Confiança: O Poder do Ritual Matinal",
          content: "O momento em frente ao espelho pode ser mais que maquiagem — pode ser uma prática de reconexão consigo mesma. Reservar minutos para cuidar do rosto, respirar fundo, afirmar suas qualidades e começar o dia com intenção é um gesto revolucionário. O autocuidado começa no íntimo e se reflete na sua postura diante do mundo. Invista em rituais que alimentem sua essência.",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIYtBZ2_0-ohmSZgqDzoq61l0E_TYBuW9ZpTZ1sJM7AnN8qKWkR_Utue_5WG9TVHsE5TQ&usqp=CAU"
        },
        {
          title: "Beleza Cíclica: Respeite o Ritmo do Seu Corpo",
          content: "O corpo feminino é regido por ciclos — e cada fase pede um cuidado diferente. Durante o mês, nossa energia, sensibilidade e até a pele mudam. Que tal adaptar seus rituais de autocuidado ao seu ciclo menstrual? No período pré-menstrual, invista em hidratação e descanso. Durante a menstruação, aposte no minimalismo e gentileza. Ciclos não são fraquezas, são bússolas internas. Honrar seus ritmos é um ato de empoderamento.",
          imageUrl: "https://conteudo.imguol.com.br/c/entretenimento/4f/2020/06/25/tipos-de-absorventes-1593110476466_v2_900x506.jpg"
        },
        {
          title: "Maquiagem Consciente: Menos Capa, Mais Expressão",
          content: "Maquiar-se não precisa ser esconder — pode ser revelar. Troque a lógica da camuflagem pela arte da expressão. Escolha produtos que cuidam da pele enquanto valorizam suas características naturais. Aposte em cosméticos veganos, cruelty-free e com fórmulas limpas. Sua beleza não precisa seguir roteiro: ela só precisa de espaço para brilhar do seu jeito.",
          imageUrl: "https://lustminerals.com.au/cdn/shop/files/CLEAN_GIRL_EVERYDAY_MAKEUP_KIT_1024x1024.jpg?v=1731476177"
        },
        {
          title: "Sono de Qualidade: O Elixir Mais Subestimado da Beleza",
          content: "Dormir bem é o segredo mais negligenciado do autocuidado. Durante o sono, seu corpo regenera tecidos, regula hormônios e fortalece a imunidade. Investir em um ritual noturno — como evitar telas, usar aromaterapia ou escutar meditações — é investir em equilíbrio físico e emocional. Uma pele viçosa e um olhar descansado são reflexos de noites bem dormidas. O luxo silencioso do autocuidado começa com um bom travesseiro.",
          imageUrl: "https://www.duoflex.com.br/img/blog/grande/6ed431aa8ebba85f8400726a0bdd0342.jpg"
        },
        {
          title: "Minimalismo Estético: Curadoria da Sua Beleza Autêntica",
          content: "Menos é mais quando cada escolha faz sentido. Em vez de acumular produtos, crie um ritual de beleza que reflita sua essência. Qual item realmente realça sua energia? Qual gesto te conecta consigo mesma? O minimalismo estético é sobre clareza, intenção e identidade. Beleza não é sobre excesso — é sobre coerência com quem você é por dentro.",
          imageUrl: "https://pt.quizur.com/_image?href=https://static.quizur.com/i/b/592f6403a6f7a7.41977483woman-with-credit-card-and-shopping-bags.jpg&w=1024&h=1024&f=webp"
        },
        {
          title: "Autocuidado como Ativismo: Ser Você Também É Resistência",
          content: "Num mundo que insiste em padronizar corpos, sentimentos e comportamentos, cuidar de si mesma com ternura é um ato revolucionário. Dizer “não” ao que não te representa e “sim” ao que te nutre é uma postura política. Escolher sua paz, sua saúde mental e seu brilho natural é um manifesto diário. Autocuidado não é fuga — é resistência consciente e amorosa.",
          imageUrl: "https://www.setesc.ms.gov.br/wp-content/uploads/2020/06/capa-1.jpeg"
        },
        {
            title: "Autoconhecimento é o Novo Skincare",
            content: "Cuidar da mente é tão essencial quanto cuidar da pele. Descubra como pequenas mudanças de hábito podem transformar sua autoestima.",
            imageUrl: "https://etalent.com.br/wp-content/uploads/2022/12/Artigo-Autoconhecimento.jpg"
        },
        {
            title: "Minimalismo na Rotina de Beleza: Menos é Mais",
            content: "Abandone o excesso de produtos e abrace uma rotina mais consciente e eficiente. Sua pele — e seu bolso — agradecem.",
            imageUrl: "https://nati.com.br/wp-content/uploads/2022/01/maquiagem-natural-compressed-2.jpg"
        },
      ]
  });
}

main()
  .then(() => {
    console.log('Seed concluída com sucesso!');
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    return prisma.$disconnect();
  });
