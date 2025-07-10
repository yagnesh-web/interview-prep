const Question = require("../models/Question");
const Session = require("../models/Session");
const { removeListener } = require("../models/User");


exports.createSession = async (req,res) => {
    try {
        const {role ,experience ,topicsToFocus, description ,questions}= req.body;

        const userId = req.user._id;
        const session = await Session.create({
            user: userId,
            role,
            experience,
            topicsToFocus,
            description,
        });
        const questionDocs = await Promise.all(
            questions.map(async (q) =>{
                const questions = await Question.create({
                    session: session._id,
                    question: q.question,
                    answer: q.answer,
                });
                return questions._id;
            })
        );
        session.questions = questionDocs;
        await session.save();
        // console.log(session);
        res.status(201).json({ success: true, session});

    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error"});
    }
};

exports.getMySessions = async(req,res) => {
    try {
        const sessions = await Session.find({user: req.user.id}).sort({createdAt: -1}).populate("questions");
        // console.log(sessions);
        res.status(200).json(sessions);
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error"});
    }
};
exports.getSessionById = async(req,res) => {
    try {
        const session = await Session.findById(req.params.id).populate({
            path: "questions",
            options: {sort: { isPinned: -1, createdAt: 1}},
        }).exec();

        if(!session) {
            return res.status(404).json({ success:false, message: "Session not found"});
        }

        res.status(200).json({session});
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error"});
    }
};
exports.deleteSessions = async(req,res) => {
    try {
        const session = await Session.findById(req.params.id);
         if(!session) {
            return res.status(404).json({message: "Session not found"});
         }

         if(session.user.toString() !== req.user.id) {
            return res.status(401).json({ message: "Not authorized to delete this session"});
         }

         await Question.deleteMany({ session: session._id});

         await session.deleteOne();

         res.status(200).json({message: "Session deleted successfully"});

    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error"});
    }
};