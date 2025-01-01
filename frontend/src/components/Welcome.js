const Welcome = () => {
  return (
    <div>
        <span className="text-3xl font-bold text-primary">
            Welcome{" "}
            <span className="text-3xl font-bold text-textPrimary">
                to the{" "}
                <span className="text-3xl font-bold text-priority">To-Do</span>
                {" "}
                App
            </span>
        </span>
        <button>Sign In</button>
        <button>Register</button>
    </div>
  )
}
export default Welcome