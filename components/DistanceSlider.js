export default function DistanceSlider({ distance, setDistance}){
    return (
        <div>
          <label htmlFor="distance">거리 (최대 500m): {distance}m</label>
          <input
            type="range"
            id="distance"
            name="distance"
            min="0"
            max="500"
            step="100"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        </div>
      );
}