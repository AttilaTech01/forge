import Button, { ButtonType } from "./Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("Click on button !");
  };

  return (
    <div>
      <Button buttonType={ButtonType.primary} onClick={handleClick}>
        Primary
      </Button>
      <Button rounded buttonType={ButtonType.primary} onClick={handleClick}>
        Primary Rounded
      </Button>
      <Button outlined buttonType={ButtonType.primary} onClick={handleClick}>
        Primary Outlined
      </Button>
      <Button
        outlined
        rounded
        buttonType={ButtonType.primary}
        onClick={handleClick}
      >
        Primary Outlined Rounded
      </Button>
      <Button buttonType={ButtonType.success} onClick={handleClick}>
        Success
      </Button>
      <Button outlined buttonType={ButtonType.success} onClick={handleClick}>
        Success Outlined
      </Button>
      <Button buttonType={ButtonType.warning} onClick={handleClick}>
        Warning
      </Button>
      <Button outlined buttonType={ButtonType.warning} onClick={handleClick}>
        Warning Outlined
      </Button>
      <Button buttonType={ButtonType.danger} onClick={handleClick}>
        Danger
      </Button>
      <Button outlined buttonType={ButtonType.danger} onClick={handleClick}>
        Danger Outlined
      </Button>
      <Button disabled buttonType={ButtonType.primary} onClick={handleClick}>
        Disabled
      </Button>
      <Button
        disabled
        outlined
        buttonType={ButtonType.primary}
        onClick={handleClick}
      >
        Disabled Outlined
      </Button>
    </div>
  );
}

export default ButtonPage;
