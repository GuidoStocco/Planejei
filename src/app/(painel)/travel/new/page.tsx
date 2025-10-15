import NewTravelScreen from '@/src/screens/travel/new';
import useCreateTravel from '@/src/hooks/useCreateTravel';
import { TravelFormData } from '@/src/hooks/useCreateTravel';

export default function NewTravel() {

  const {control, handleSubmit, errors, isSubmitting, createNewTravel} = useCreateTravel();

 return (
   <NewTravelScreen
    control={control}
    handleSubmit={handleSubmit}
    errors={errors}
    isSubmitting={isSubmitting}
    createNewTravel={createNewTravel}
   />
  );
}