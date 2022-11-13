require "test_helper"

class SitesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @site = sites(:one)
  end

  test "should get index" do
    get sites_url, as: :json
    assert_response :success
  end

  test "should create site" do
    assert_difference('Site.count') do
      post sites_url, params: { site: { build_id: @site.build_id, description: @site.description, domain: @site.domain, email: @site.email, name: @site.name, repo_branch: @site.repo_branch, repo_name: @site.repo_name, repo_url: @site.repo_url, tagline: @site.tagline, title: @site.title, user_id: @site.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show site" do
    get site_url(@site), as: :json
    assert_response :success
  end

  test "should update site" do
    patch site_url(@site), params: { site: { build_id: @site.build_id, description: @site.description, domain: @site.domain, email: @site.email, name: @site.name, repo_branch: @site.repo_branch, repo_name: @site.repo_name, repo_url: @site.repo_url, tagline: @site.tagline, title: @site.title, user_id: @site.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy site" do
    assert_difference('Site.count', -1) do
      delete site_url(@site), as: :json
    end

    assert_response 204
  end
end
