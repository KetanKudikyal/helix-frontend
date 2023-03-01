import { questionWithTags } from '@/redux/api';
import { Question } from '@/redux/api/question';

export const questionsApi = questionWithTags.injectEndpoints({
  endpoints: (build) => ({
    getAllQuestions: build.query<Question[], void>({
      query: () => ({
        url: `questions`,
      }),
      transformResponse: (response: { questions: Question[] }) => {
        return response.questions.reverse();
      },
      providesTags: ['Questions'],
    }),
    addNewQuestion: build.mutation<
      Question,
      {
        title: string;
        text: string;
      }
    >({
      query: (data) => ({
        url: `questions`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Questions'],
    }),
  }),
});

export const { useGetAllQuestionsQuery, useAddNewQuestionMutation } =
  questionsApi;
