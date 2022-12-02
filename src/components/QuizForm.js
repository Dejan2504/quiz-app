import classes from './QuizForm.module.css';

function QuizForm() {
    return(
        <div className={classes.div}>
        <form className={classes.form}>
            <h1>Title!</h1>
            <button>A</button>
            <button>B</button>
            <button>C</button>
            <button>D</button>
        </form>
        </div>
    );
}

export default QuizForm;