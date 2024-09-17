function renderCompliments() {

  if (meal.compliments && meal.compliments.length > 0) {
    return (
      <section>
        <h4 className="font-bold my-3">Compliment with</h4>
        {meal.compliments.map((compliment) => (
          <div key={compliment.id} className="flex justify-between mb-3">
            <Input
              type="checkbox"
              id={`compliment-${compliment.id}`}
              className="gap-[7px] h-[30px]"
              onChange={() =>
                toggleCompliment(compliment.id, compliment.mealComplimentPrice)
              }
            />
            <img
              src={compliment.mealComplimentPhoto}
              alt={compliment.mealComplimentName}
              className="w-[50px] h-[50px] object-cover rounded"
            />
            <p className="flex-1 ml-3">
              {compliment.mealComplimentName} - NGN{" "}
              {compliment.mealComplimentPrice}
            </p>
          </div>
        ))}
      </section>
    );
  }
  return null;
}

export default renderCompliments;
