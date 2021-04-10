import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useHistory, useParams } from "react-router";
import { AnswerButton, Column, Header, IconButton } from "../../components";
import "./QuestionPage.css";
import firebase from "firebase";
import { PlayerIdContext } from "../../utils/PlayerIdContext";

interface Answer {
  text: string;
  correct: boolean;
}

interface Question {
  question: string;
  answers: Answer[];
  image: string;
}

const QuestionPage: React.FC = () => {
  const [seconds, setSeconds] = React.useState<number>(20);
  const [
    currentQuestionIndex,
    setCurrentQuestionIndex,
  ] = React.useState<number>(1);

  const questions: Question[] = [
    {
      question: "מהו פולימר",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Polyacetylene-3D-balls.png/1200px-Polyacetylene-3D-balls.png",
      answers: [
        {
          text: "חומר שבנוי ממולקולות ענק שבנויות מיחידות חוזרות",
          correct: true,
        },
        {
          text: "חומר שבנוי מאטומי פחמן שקשורים אחד לשני בעזרת קשרים קוולנטים",
          correct: false,
        },
        {
          text: "חומר שבנוי מיונים חיוביים ושליליים",
          correct: false,
        },
      ],
    },
    {
      question: "מהי טבעת בנזן",
      image: "https://img.mako.co.il/2016/03/14/tabaot_basal_newpan_i.jpg",
      answers: [
        {
          text: "טבעת שעשוייה מבנזין",
          correct: false,
        },
        {
          text: "שישה אטומי פחמן שקשורים אחד לשני וביניהם מחולקים אלקטרונים",
          correct: true,
        },
        {
          text: "ארבעה אטומי פחמן שקשורים אחד לשני וביניהם מחולקים אלקטרונים",
          correct: false,
        },
      ],
    },
    {
      question:
        "האם פולימר עם טמפרטורה זגוגית גבוהה מטמפרטורת החדר יהיה דבק טוב",
      image:
        "https://www.meijer.com/content/dam/meijer/product/0002/92/7698/07/0002927698070_0_A1C1_1200.png",
      answers: [
        {
          text: "כן",
          correct: false,
        },
        {
          text: "לא",
          correct: true,
        },
      ],
    },
    {
      question: "בחר את המאפיין ההכרחי לסיבים",
      image:
        "https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/8C/7E/e83fc525-e879-4a4b-9f6a-1bb4e33a189c.JPG",
      answers: [
        {
          text: "טמפרטורה זגוגית נמוכה",
          correct: false,
        },
        {
          text: "טבעת בנזן בשלד",
          correct: false,
        },
        {
          text: "טמפרטורה זגוגית גבוהה",
          correct: true,
        },
      ],
    },
    {
      question: "איזה מהאפשרויות עשוי מפולימרים",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Polyacetylene-3D-balls.png/1200px-Polyacetylene-3D-balls.png",
      answers: [
        {
          text: "פלסטיק",
          correct: true,
        },
        {
          text: "יהלום",
          correct: false,
        },
        {
          text: "מלח",
          correct: false,
        },
      ],
    },
    {
      question: "האם די אן איי פולימר",
      image:
        "https://nebula.org/blog/wp-content/uploads/2020/08/DNA_1280p-1024x576.jpg",
      answers: [
        {
          text: "לא",
          correct: false,
        },
        {
          text: "כן",
          correct: true,
        },
      ],
    },
    {
      question: "סידור אמורפי הוא סידור - ",
      image: "https://embibe-cdn.s3.amazonaws.com/resources/images/7650.jpg",
      answers: [
        {
          text: "אינו מסודר",
          correct: true,
        },
        {
          text: "גבישי",
          correct: false,
        },
      ],
    },
    {
      question: "פולימר תרמופלסטי הינו - ",
      image:
        "https://revpart.com/wp-content/uploads/2016/11/plastic-tubes-e1479220320572.jpg",
      answers: [
        {
          text: "מתרכך בחימום",
          correct: true,
        },
        {
          text: "מתרכך בקירור",
          correct: false,
        },
      ],
    },
    {
      question: "פולימר תרמוסטי הינו - ",
      image:
        "https://www.researchgate.net/profile/Anandvijay-Karuppiah/publication/329156276/figure/fig2/AS:696240140468229@1543007993787/Molecular-Structure-of-Thermoplastic-and-Thermoset-Polymers-8.jpg",
      answers: [
        {
          text: "מתקשה בקירור",
          correct: false,
        },
        {
          text: "מתקשה בחימום",
          correct: true,
        },
      ],
    },
    {
      question: "קשרי צילוב הם - ",
      image:
        "https://uspackagingandwrapping.com/uploads/image/Cross%20Linked%20Polymers%20Image.jpg",
      answers: [
        {
          text: "קשרי וואן דר וואלס בין שתי שרשראות פולימר",
          correct: false,
        },
        {
          text: "קשרים יונים בין שתי שרשראות פולימר",
          correct: false,
        },
        {
          text: "קשרים קוולנטים בין שתי שרשראות פולימר",
          correct: true,
        },
      ],
    },
    {
      question: "ככל שצפיפות קשרי הצילוב גבוהה יותר, כך - ",
      image:
        "http://cdn.shopify.com/s/files/1/0201/0683/8116/articles/MFW-foam-density-images-860x400_1200x1200.jpg?v=1611063052",
      answers: [
        {
          text: "קישחותו של החומר גבוהה יותר",
          correct: true,
        },
        {
          text: "גמישותו של החומר גבוהה",
          correct: false,
        },
      ],
    },
    {
      question: "האם פולימרים תרמוסטיים יכולים להיות ממוחזרים",
      image:
        "https://cdn.shopify.com/s/files/1/0061/7195/1202/articles/Depositphotos_143802205_l-2015-1024x576_8f29305a-9146-48df-b61a-72e5e8bb3ff2.jpg?v=1598906396",
      answers: [
        {
          text: "לא",
          correct: true,
        },
        {
          text: "כן",
          correct: false,
        },
      ],
    },
    {
      question: "על מנת ליהנות מתכונות של כמה פולימרים, אנו יכולים להשתמש ב - ",
      image:
        "https://cdn.shopify.com/s/files/1/0064/5890/0564/articles/AdobeStock_49486085_300x300.jpg?v=1580240398",
      answers: [
        {
          text: "קשרי צילוב",
          correct: false,
        },
        {
          text: "חימום בטמפרטורה מאוד גבוהה",
          correct: false,
        },
        {
          text: "קופולימרים",
          correct: true,
        },
      ],
    },
    {
      question: "טבעת בנזן בנויה מחלקיקי - ",
      image:
        "https://www.pngkey.com/png/detail/361-3616338_this-free-icons-png-design-of-benzene-ring.png",
      answers: [
        {
          text: "חנקן",
          correct: false,
        },
        {
          text: "פחמן",
          correct: true,
        },
        {
          text: "אורניום",
          correct: false,
        },
      ],
    },
    {
      question: "האם נהנתם מהחידון",
      image: "https://mhconsult.com/sites/default/files/blog/happiness.jpg",
      answers: [
        {
          text: "חד משמעית כן",
          correct: true,
        },
        {
          text: "כיף יותר מהשיעורים של פיה בוודאות",
          correct: true,
        },
        {
          text: "הדבר הכי כיף שעשיתי בחיים",
          correct: true,
        },
      ],
    },
  ];

  const history = useHistory();

  const goBack = () => history.goBack();

  const { gameID } = useParams<{ gameID: string }>();
  const { playerID } = React.useContext(PlayerIdContext);

  const tickSeconds = () => {
    setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
  };

  const moveToNextQuestion = () => {
    setCurrentQuestionIndex((currentQuestionIndex) => currentQuestionIndex + 1);
    setSeconds(20);
  };

  const handleQuestions = async (item: Answer) => {
    if (currentQuestionIndex === 14) {
      history.goBack();
      return;
    }
    if (item.correct) {
      await firebase
        .database()
        .ref("games")
        .child(gameID)
        .child("participants")
        .child(playerID)
        .transaction((participant) => {
          if (participant) participant.points++;
          return participant;
        });
    }
    moveToNextQuestion();
  };

  React.useEffect(() => {
    tickSeconds();
    firebase
      .database()
      .ref("games")
      .child(gameID)
      .child("participants")
      .child(playerID)
      .update({
        points: 0,
      });
  }, []);

  React.useEffect(() => {
    if (seconds < 1) {
      moveToNextQuestion();
    }
  }, [seconds]);

  return (
    <Column>
      <Header
        left={
          <IconButton
            icon={<FaChevronLeft color="var(--text-color)" size="1.6rem" />}
            onClick={goBack}
          />
        }
        title="חידון"
        subtitle="ענו על השאלות לפני שנגמר הזמן"
        right={
          <span className="question_page_seconds font_small">{seconds}</span>
        }
      />
      <Column style={{ alignItems: "center", paddingInline: "2rem" }}>
        <span className="qusetion_page_question font_large">
          {questions[currentQuestionIndex].question}
        </span>
        <img
          src={questions[currentQuestionIndex].image}
          className="question_page_image"
        />
      </Column>
      <Column style={{ alignItems: "center", paddingInline: "2rem" }}>
        {questions[currentQuestionIndex].answers.map((item, index) => (
          <AnswerButton
            answerText={questions[currentQuestionIndex].answers[index].text}
            onClick={() =>
              handleQuestions(questions[currentQuestionIndex].answers[index])
            }
            style={{ marginBlock: "1.2rem" }}
          />
        ))}
      </Column>
    </Column>
  );
};

export default QuestionPage;
