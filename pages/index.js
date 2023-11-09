import { useState } from 'react';
import CuisineButton from '../components/CuisineButton';
import DistanceSlider from '../components/DistanceSlider';
import { useRouter } from 'next/router';

export default function Home() {
  const [distance, setDistance] = useState(0);
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const router = useRouter();

  const toggleCuisine = (cuisine) => {
    setSelectedCuisines((prev) =>
      prev.includes(cuisine) ? prev.filter((c) => c !== cuisine) : [...prev, cuisine]
    );
  };

  const handleRecommendation = () => {
    const query = selectedCuisines.length > 0
      ? `cuisines=${selectedCuisines.join(',')}&distance=${distance}`
      : `distance=${distance}`;
      
    router.push(`/recommendation?${query}`);
  };

  return (
    <div>
      <h1>o-jeommo: where lunch starts</h1>
      {['한식', '중식', '일식', '양식', '랜덤'].map((cuisine) => (
        <CuisineButton
          key={cuisine}
          cuisine={cuisine}
          isSelected={selectedCuisines.includes(cuisine)}
          onToggle={toggleCuisine}
        />
      ))}
      <DistanceSlider distance={distance} setDistance={setDistance} />
      <button onClick={handleRecommendation}>추천하기</button>
    </div>
  );
}
