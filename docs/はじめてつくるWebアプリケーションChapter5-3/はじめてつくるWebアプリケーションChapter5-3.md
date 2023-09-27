# ログアウト機能を完成させよう

## ログアウトリンクを作成しよう

　ログアウトの仕組みそのものはdeviseが用意してくれているため、その仕組みを画面から呼び出すだけでログアウト機能は完成します。今回はナビゲーションバーにログアウト機能を追加します。app/views/layouts/application.html.erbを開き、次のように変更します。

```html
<nav class="navbar navbar-expand-lg bg-light">

  <div class="container-fluid">

    <a class="navbar-brand" href="#">Pdiary</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

      <span class="navbar-toggler-icon"></span>

    </button>

    <div class="collapse navbar-collapse" id="navbarNav">

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">

          <a class="nav-link active" aria-current="page" href="/ideas">Ideas</a>
        
        </li>

        <li class="nav-item">

          <%= link\_to "New idea", new\_idea\_path, class: "nav-link active" %>
        
        </li>

      </ul>

      <ul class="nav">

        <li class="nav-item">

          <% if current\_user.present? %>

            <%= current\_user.email %>

          <% end %>

        </li>

      </ul>

      <span class="navbar-text pull-right">

        <%= button\_to "Logout", destroy\_user\_session\_path, method: :delete, data: { turbo: false }, class: "btn btn-link" %>

      </span>

    </div>

  </div>

</nav>
```

## ログアウトしてみよう

　Webサーバーを起動し、確認してみます。

![](　fdef5fad-6bca-4aa5-a33f-a7e63494358e.002.png)

　右上にLogoutボタンが追加されているのが確認できます。こちらのリンクをクリックすることで「 Signed out successfully」というフラッシュメッセージが表示され、ログアウトが完了します。

![](　fdef5fad-6bca-4aa5-a33f-a7e63494358e.003.png)
