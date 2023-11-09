export default function CuisineButton({cuisine, isSelected, onToggle}){
    return (
        <button
            onClick={() => onToggle(cuisine)}
            style={{ backgroundColor: isSelected ? 'blue' : 'grey', margin: '5px' }}
        >
          {cuisine}
        </button>   
    );
}