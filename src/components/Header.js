
function ProfileButton() {
  return (
    <button >
      <img
        src="https://app.pepcorns.com/assets/img/dealer_reg.svg"
        width={50}
      />
    </button>
  )
}

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <img src="https://pepcorns.com/image/png/logo-dark.png" />
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a className="mr-1 hover:text-gray-900">Dashboard</a>

        </nav>
        <ProfileButton />
      </div>
    </header>
  )
}