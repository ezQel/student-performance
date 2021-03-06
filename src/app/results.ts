const data = `{
	"student_name": "Ofelia Mckay",
	"student_admission_number": "234234",
	"student_photo": "https://cdn.pixabay.com/photo/2014/11/19/10/52/man-537136_1280.jpg",
	"exam_name": "Form 2 - CAT 2 - (2019 Term 3)",
	"class_name": "2 East",
	"principals_remarks": "Keep working hard",
	"class_teachers_remarks": "You have room for improvement. Work harder on your weak areas",
	"mean_grade": "C+",
	"overall_position": {
		"deviation": 34,
		"position_out_of": 197,
		"position": 125
	},
	"stream_position": {
		"deviation": 6,
		"position_out_of": 49,
		"position": 34
	},
	"mean_marks": {
		"deviation": 2.5,
		"avg_score": 59.0
	},
	"subject_results": [
		{
			"rank_out_of": 49,
			"subject_name": "English",
			"deviation": 19.0,
			"grade": "B-",
			"comment": "Satisfactory, aim higher",
			"rank": 27,
			"score": 62.0
		},
		{
			"rank_out_of": 49,
			"subject_name": "Kiswahili",
			"deviation": -1.0,
			"grade": "D-",
			"comment": "Chini ya wastani",
			"rank": 48,
			"score": 32.0
		},
		{
			"rank_out_of": 49,
			"subject_name": "Mathematics",
			"deviation": 7.0,
			"grade": "B+",
			"comment": "Good work but aim higher",
			"rank": 15,
			"score": 73.0
		},
		{
			"rank_out_of": 49,
			"subject_name": "Biology",
			"deviation": -1.0,
			"grade": "C+",
			"comment": "Can do better, aim higher",
			"rank": 28,
			"score": 58.0
		},
		{
			"rank_out_of": 49,
			"subject_name": "Physics",
			"deviation": -39.0,
			"grade": "D-",
			"comment": "Weak but has potential",
			"rank": 49,
			"score": 31.0
		},
		{
			"rank_out_of": 49,
			"subject_name": "Chemistry",
			"deviation": 11.0,
			"grade": "B",
			"comment": "Good, can do better",
			"rank": 19,
			"score": 67.0
		},
		{
			"rank_out_of": 49,
			"subject_name": "History",
			"deviation": 13.0,
			"grade": "A",
			"comment": "Excellent work",
			"rank": 14,
			"score": 81.0
		},
		{
			"rank_out_of": 49,
			"subject_name": "Geography",
			"deviation": 37.0,
			"grade": "A",
			"comment": "Excellent work",
			"rank": 7,
			"score": 83.0
		},
		{
			"rank_out_of": 49,
			"subject_name": "C.R.E.",
			"deviation": -32.0,
			"grade": "D+",
			"comment": "Put more effort",
			"rank": 39,
			"score": 41.0
		},
		{
			"rank_out_of": 49,
			"subject_name": "Computer Studies",
			"deviation": 46.0,
			"grade": "A",
			"comment": "Excellent work",
			"rank": 8,
			"score": 83.0
		},
		{
			"rank_out_of": 8,
			"subject_name": "Business Studies",
			"deviation": -33.0,
			"grade": "D",
			"comment": "Put more effort",
			"rank": 8,
			"score": 39.0
		}
	],
	"student_performance_over_time": [
		{
			"exam_name": "Form 2 - CAT 1 - (2019 Term 1)",
			"avg_score": 75.6
		},
		{
			"exam_name": "Form 2 - CAT 2 - (2019 Term 1)",
			"avg_score": 61.8
		},
		{
			"exam_name": "Form 2 - CAT 1 - (2019 Term 2)",
			"avg_score": 67.8
		},
		{
			"exam_name": "Form 2 - CAT 2 - (2019 Term 2)",
			"avg_score": 63.2
		},
		{
			"exam_name": "Form 2 - CAT 1 - (2019 Term 3)",
			"avg_score": 56.6
		},
		{
			"exam_name": "Form 2 - CAT 2 - (2019 Term 3)",
			"avg_score": 59.1
		}
	]
}`;

export const RESULTS = JSON.parse(data);
