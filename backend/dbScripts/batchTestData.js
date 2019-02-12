db.exercises.insertOne({
    name: "The Clamshell", 
    sets: 2, 
	reps: 20, 
    reminders: "- Lie on your side; keep knees bent at 90 degree angle.- Raise your top knee up as high as can without moving your pelvis.- Pause at top (peak) for a second, then lower knee back down to starting position. - Remember to keep your feet together during the movement.- Don't lean back; keep your bottom leg still. The movement is slow and controlled. Don't rush it.",  
    media: null});
db.injuries.insertOne({
    name: "IT BAND SYNDROME",
    description: null,
    media: null,
    recoveryTime: 49
});
db.phases.insertOne({
    injury: ObjectId("5c57ba3333484428e23f4d26"), 
    exerciseList: {
        "1": [ObjectId("5c50d9cc8a35c95c29c7fe24")]
    }
});
db.exercises.insertOne({
    name: "LATERAL LEG RAISES", 
    sets: 2, 
    reps: 15,
    reminders: "- Lie on your side with legs in line with body. - Move top leg back approximately 20-30 degrees. - Bend bottom leg to provide balance and support. - Top leg is straight and is foot is engaged, toes are pointing back towards you. - Lift the top leg up, pause at peak, then lower leg down. - Movement is slow. Don't rush it.",
    media: null
});
db.phases.update(
    {"injury": ObjectId("5c57ba3333484428e23f4d26")}, 
    {$push: { "exerciseList.1" :ObjectId("5c57bb3b33484428e23f4d28")}
}); 